import { AppComponent } from './../../../app.component';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private headerService: HeaderService,
        private router: Router,
        private appComponent: AppComponent
    ) { }

    ngOnInit(): void {
    }

    get title(): string {
        return this.headerService.headerData.title
    }

    get icon(): string {
        return this.headerService.headerData.icon
    }

    get routeUrl(): string {
        return this.headerService.headerData.routeUrl
    }

    get username(): string {
        return this.headerService.headerData.username
    }

    registrar() {
        this.router.navigate(['users/create'])
    }

    autenticar() {
        this.headerService.headerData.username = null
        localStorage.removeItem('currentUser')
        this.appComponent.redirectFromLoginToHome()
    }
    
    sair(): void {
        this.headerService.headerData.username = null
        localStorage.removeItem('currentUser')
        this.appComponent.redirectFromLoginToCurrent()
    }

}
