import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HeaderData>({
        title: 'Home',
        icon: '',
        routeUrl: '',
        username: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).name : null
    })

    constructor() { }

    get headerData(): HeaderData {
        return this._headerData.value
    }

    set headerData(headerData: HeaderData) {
        this._headerData.next(headerData)
    }
}