import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sell } from '../../../models/sell.model';
import { SellService } from '../../../services/sell.service';
import { ImmobileService } from 'src/app/services/immobile.service';
import { Immobile } from 'src/app/models/immobile.model';
import { Broker } from 'src/app/models/broker.model';
import { BrokerService } from 'src/app/services/broker.service';

@Component({
    selector: 'app-sell-create',
    templateUrl: './sell-create.component.html',
    styleUrls: ['./sell-create.component.css']
})
export class SellCreateComponent implements OnInit {

    sell: Sell = {
        _id: '',
        value: null,
        date: null,
        buyerName: null,
        immobile: null,
        broker: null,
        brokerId: null,
    }
    immobiles: Immobile[] = [];
    brokers: Broker[] = [];

    types = ['contratado', 'comissionado'];

    constructor(
        private sellService: SellService,
        private immobileService: ImmobileService,
        private brokerService: BrokerService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.immobileService.read().subscribe(immobiles => {
            this.immobiles = immobiles;
        })
        this.brokerService.read().subscribe(brokers => {
            this.brokers = brokers;
        })
    }

    createSell() {
        this.sell.date = this.sell.date + 'T01:00:00';
        this.sell.brokerId = this.sell.broker._id;
        this.sellService.create(this.sell).subscribe(() => {
            this.sellService.showMessage('Venda cadastrada com sucesso');
            var immobile = this.sell.immobile;
            immobile.toSell = false;
            this.immobileService.update(immobile).subscribe(() => {
                console.log('Atualizou imóvel')
            });
            this.router.navigate(['/sells'])
        });
    }

    cancel() {
        this.router.navigate(['/sells'])
    }

}
