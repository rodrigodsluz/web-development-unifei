import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reports-crud',
    templateUrl: './reports-crud.component.html',
    styleUrls: ['./reports-crud.component.css']
})
export class ReportsCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Relatórios Gerenciais',
            icon: 'sports_esports',
            routeUrl: '/reports'
        })
    }

    ngOnInit(): void {
    }

    // navigateToSellCreate() {
    //     this.router.navigate(['/payments/create'])
    // }

}
