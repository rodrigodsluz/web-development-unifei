import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-immobiles-crud',
    templateUrl: './immobiles-crud.component.html',
    styleUrls: ['./immobiles-crud.component.css']
})
export class ImmobilesCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Imóveis',
            icon: 'sports_esports',
            routeUrl: '/immobiles'
        })
    }

    ngOnInit(): void {
    }

    get user_id(): string {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null
    }

    navigateToImmobileCreate() {
        this.router.navigate(['/immobiles/create'])
    }

}
