import { HeaderService } from '../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Sell } from '../../../models/sell.model';
import { SellService } from '../../../services/sell.service';
import { BrokerService } from '../../../services/broker.service';
import { Broker } from '../../../models/broker.model';

@Component({
    selector: 'app-payment-read',
    templateUrl: './payment-read.component.html',
    styleUrls: ['./payment-read.component.css']
})
export class PaymentReadComponent implements OnInit {

    sells: Sell[] = [];
    brokers: Broker[] = [];
    filter = {
        broker: null,
        month: null,
        year: 2021,
        date: null
    };
    details = [];
    total = 0;
    displayedColumns = ['immobile', 'sellValue', 'percent', 'total'];
    months = [{number: '01', name: 'Janeiro', lastDay: 31},{number: '02', name: 'Fevereiro', lastDay: 28},{number: '03', name: 'Março', lastDay: 31},
                {number: '04', name: 'Abril', lastDay: 30},{number: '05', name: 'Maio', lastDay: 31},{number: '06', name: 'Junho', lastDay: 30},
                {number: '07', name: 'Julho', lastDay: 31},{number: '08', name: 'Agosto', lastDay: 31},{number: '09', name: 'Setembro', lastDay: 30},
                {number: '10', name: 'Outubro', lastDay: 31},{number: '11', name: 'Novembro', lastDay: 30},{number: '12', name: 'Dezembro', lastDay: 31}];

    constructor(private sellService: SellService,
                private brokerService: BrokerService,
                private headerService: HeaderService) { }

    ngOnInit(): void {
        this.sellService.read().subscribe(sells => {
            this.sells = sells;
        });
        this.brokerService.read().subscribe(brokers => {
            this.brokers = brokers;
        });
    }

    searchPayment(){
        // console.log(this.sells);
        if(!this.filter.broker || !this.filter.month || !this.filter.year){
            this.sellService.showMessage('Preencha os 3 filtros');
            return;
        }

        let value = 0, total = 0;
        let filter = this.filter;
        filter.date = filter.year + '-' + filter.month.number + '-' + filter.month.lastDay + 'T23:59:59';
        let firstDay = filter.year + '-' + filter.month.number + '-' + '01T00:00:01';
        let details = [];

        if (isNaN(new Date(filter.date).getTime())) {
            this.sellService.showMessage('Data inválida! Selecione um ano no formato YYYY');
            return;
        }
            this.sells.forEach(function(sell){
                if(filter.broker._id == sell.broker._id && new Date(sell.date) < new Date(filter.date)  && new Date(sell.date) > new Date(firstDay)){
                    if(sell.broker.type == 'contratado'){
                        value = 1 / 100 * sell.value;
                    }
                    else{
                        value = filter.broker.percent / 100 * sell.value;
                    }
                    total += value;
    
                    details.push({immobile: sell.immobile.description, sellValue: sell.value, total: value.toFixed(2), percent: filter.broker.percent ? filter.broker.percent : 1});
                }
            });
            if(filter.broker.type = 'contratado'){
                total += filter.broker.salary;
            }
            // console.log(details, total.toFixed(2));
            this.details = details;
            this.total = total;
    }

}
