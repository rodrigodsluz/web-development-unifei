import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sells-crud',
    templateUrl: './sells-crud.component.html',
    styleUrls: ['./sells-crud.component.css']
})
export class SellsCrudComponent implements OnInit {

    constructor(
        private router: Router,
        private headerService: HeaderService
    ) {
        Object.assign(headerService.headerData, {
            title: 'Vendas',
            icon: 'sports_esports',
            routeUrl: '/sells'
        })
    }

    ngOnInit(): void {
    }

    navigateToSellCreate() {
        this.router.navigate(['/sells/create'])
    }

}
