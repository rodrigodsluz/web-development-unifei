import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Broker } from '../../../models/broker.model';
import { BrokerService } from '../../../services/broker.service';

@Component({
    selector: 'app-broker-create',
    templateUrl: './broker-create.component.html',
    styleUrls: ['./broker-create.component.css']
})
export class BrokerCreateComponent implements OnInit {

    broker: Broker = {
        _id: '',
        salary: null,
        percent: null,
        creci: null,
        name: null,
        type: null,
        admissionDate: null 
    }

    types = ['contratado', 'comissionado'];

    constructor(
        private brokerService: BrokerService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    createBroker() {
        if(this.broker.admissionDate) {
            this.broker.admissionDate = this.broker.admissionDate + 'T01:00:00';
        }
        this.brokerService.create(this.broker).subscribe(() => {
            this.brokerService.showMessage('Corretor cadastrado com sucesso');
            this.router.navigate(['/brokers'])
        })
    }

    cancel() {
        this.router.navigate(['/brokers'])
    }

}
