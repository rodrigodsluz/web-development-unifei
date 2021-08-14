import { HeaderService } from '../../template/header/header.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Broker } from '../../../models/broker.model';
import { BrokerService } from '../../../services/broker.service';

@Component({
    selector: 'app-broker-read',
    templateUrl: './broker-read.component.html',
    styleUrls: ['./broker-read.component.css']
})
export class BrokerReadComponent implements OnInit {

    brokers: Broker[] = [];
    displayedColumns = ['name', 'salary', 'percent', 'admissionDate', 'type', 'creci', 'action'];
    types = [];

    constructor(private immobileService: BrokerService, private headerService: HeaderService) { }

    ngOnInit(): void {
        this.immobileService.read().subscribe(brokers => {
            this.brokers = brokers;
        })
    }

    openDialog(event: string, type: string) {
        this.immobileService.openDialog(event, type)
    }

}
