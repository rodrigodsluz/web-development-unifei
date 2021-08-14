import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payments-crud',
    templateUrl: './payments-crud.component.html',
    styleUrls: ['./payments-crud.component.css']
})
export class PaymentsCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Pagamentos',
            icon: 'sports_esports',
            routeUrl: '/payments'
        })
    }

    ngOnInit(): void {
    }

    // navigateToSellCreate() {
    //     this.router.navigate(['/payments/create'])
    // }

}
