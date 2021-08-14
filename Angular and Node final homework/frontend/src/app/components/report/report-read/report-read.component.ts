import { HeaderService } from '../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Sell } from '../../../models/sell.model';
import { SellService } from '../../../services/sell.service';
import { BrokerService } from '../../../services/broker.service';
import { Broker } from '../../../models/broker.model';
import { ImmobileService } from 'src/app/services/immobile.service';
import { Immobile } from 'src/app/models/immobile.model';

@Component({
    selector: 'app-report-read',
    templateUrl: './report-read.component.html',
    styleUrls: ['./report-read.component.css']
})
export class ReportReadComponent implements OnInit {

    sells: Sell[] = [];
    brokers: Broker[] = [];
    immobiles: Immobile[] = [];
    filter = {
        month: null,
        year: 2021,
        date: null
    };
    immobilesSelled = [];
    immobilesNotSelled = [];
    billingByBroker = [];
    paymentByBroker = [];
    maxBroker = {name: null, value: 0};
    total = 0;
    totalBilling = 0;
    displayedColumns = ['immobile', 'sellValue', 'percent', 'total'];
    columnsImmobilesSelled = ['immobile', 'broker', 'buyerName', 'value', 'date'];
    columnsImmobiles = ['description', 'price', 'nameSeller', 'type', 'date'];
    columnsBillingByBroker = ['name', 'value'];
    columnsPaymentByBroker = ['name', 'value'];

    months = [{number: '01', name: 'Janeiro', lastDay: 31},{number: '02', name: 'Fevereiro', lastDay: 28},{number: '03', name: 'Março', lastDay: 31},
                {number: '04', name: 'Abril', lastDay: 30},{number: '05', name: 'Maio', lastDay: 31},{number: '06', name: 'Junho', lastDay: 30},
                {number: '07', name: 'Julho', lastDay: 31},{number: '08', name: 'Agosto', lastDay: 31},{number: '09', name: 'Setembro', lastDay: 30},
                {number: '10', name: 'Outubro', lastDay: 31},{number: '11', name: 'Novembro', lastDay: 30},{number: '12', name: 'Dezembro', lastDay: 31}];

    constructor(private sellService: SellService,
                private brokerService: BrokerService,
                private immobileService: ImmobileService,
                private headerService: HeaderService) { }

    ngOnInit(): void {
        this.sellService.read().subscribe(sells => {
            this.sells = sells;
        });
        this.brokerService.read().subscribe(brokers => {
            this.brokers = brokers;
        });
    }

    searchReports(){
        // console.log(this.sells);
        if(!this.filter.month || !this.filter.year){
            this.sellService.showMessage('Preencha os 2 filtros');
            return;
        }

        let value = 0, total = 0, totalBilling = 0, differenceInMonths = 0, maxBrokerValue = 0;
        let filter = this.filter;
        filter.date = filter.year + '-' + filter.month.number + '-' + filter.month.lastDay + 'T23:59:59';
        let firstDay = filter.year + '-' + filter.month.number + '-' + '01T00:00:01';
        let immobilesSelled = [];
        let immobiles = [];
        let billingByBroker = [];
        let billingByBrokerAux = [];
        let paymentByBroker = [];
        let paymentByBrokerAux = [];
        let maxBroker = {name: null, value: null};

        if (isNaN(new Date(filter.date).getTime())) {
            this.sellService.showMessage('Data inválida! Selecione um ano no formato YYYY');
            return;
        }
        this.sells.forEach(function(sell){
            if(new Date(sell.date) < new Date(filter.date)  && new Date(sell.date) > new Date(firstDay)){
                totalBilling += 5 / 100 * sell.value;
                if(sell.broker.type == 'contratado'){
                    value = 1 / 100 * sell.value;
                }
                else{
                    value = sell.broker.percent / 100 * sell.value;
                }
                total += value;

                immobilesSelled.push(sell);

                if (billingByBroker[sell.broker._id]) {
                    billingByBroker[sell.broker._id] = {id: sell.broker._id, name: sell.broker.name, value: billingByBroker[sell.broker._id].value + (5 / 100 * sell.value)};
                }else{
                    billingByBroker[sell.broker._id] = {id: sell.broker._id, name: sell.broker.name, value: 5 / 100 * sell.value};
                }

                if (paymentByBroker[sell.broker._id]) {
                    paymentByBroker[sell.broker._id] = {id: sell.broker._id, name: sell.broker.name, value: paymentByBroker[sell.broker._id].value + value};
                }else{
                    paymentByBroker[sell.broker._id] = {id: sell.broker._id, name: sell.broker.name, value: value};
                }

            }
        });
        console.log(paymentByBroker)

        this.immobileService.read().subscribe(immobiles => {
            this.immobiles = immobiles;
        });
        this.immobiles.forEach(function(im){
            differenceInMonths = (new Date(filter.date).getMonth() - new Date(new Date(im.date)).getMonth() + (12 * (new Date(filter.date).getFullYear() - new Date(new Date(im.date)).getFullYear()))) + 1;
            if(differenceInMonths > 6){
                immobiles.push(im);
            }
        });

        for (var billing in billingByBroker) {
            billingByBrokerAux.push(billingByBroker[billing]);
        }
        for (var payment in paymentByBroker) {
            paymentByBrokerAux.push(paymentByBroker[payment]);
        }

        maxBrokerValue = Math.max.apply(Math, paymentByBrokerAux.map(function(o) { return o.value; }));
        let filterBroker = paymentByBrokerAux.filter(function(broker) {
            return broker.value == maxBrokerValue;
        });
        // console.log(filterBroker)
        maxBroker = {name: filterBroker[0] ? filterBroker[0].name : null , value: maxBrokerValue}

        this.maxBroker = maxBroker;
        this.paymentByBroker = paymentByBrokerAux;
        this.billingByBroker = billingByBrokerAux;
        this.immobilesNotSelled = immobiles;
        this.immobilesSelled = immobilesSelled;
        this.total = total;
        this.totalBilling = totalBilling;
    }

}
