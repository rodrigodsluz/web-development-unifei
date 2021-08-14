import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-brokers-crud',
    templateUrl: './brokers-crud.component.html',
    styleUrls: ['./brokers-crud.component.css']
})
export class BrokersCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Corretores',
            icon: 'sports_esports',
            routeUrl: '/brokers'
        })
    }

    ngOnInit(): void {
    }

    navigateToBrokerCreate() {
        this.router.navigate(['/brokers/create'])
    }

}
