import { HeaderService } from '../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Sell } from '../../../models/sell.model';
import { SellService } from '../../../services/sell.service';

@Component({
    selector: 'app-sell-read',
    templateUrl: './sell-read.component.html',
    styleUrls: ['./sell-read.component.css']
})
export class SellReadComponent implements OnInit {

    sells: Sell[] = [];
    displayedColumns = ['immobile', 'broker', 'buyerName', 'value', 'date'];
    types = [];

    constructor(private sellService: SellService, private headerService: HeaderService) { }

    ngOnInit(): void {
        this.sellService.read().subscribe(sells => {
            this.sells = sells;
        })
    }

    openDialog(event: string, type: string) {
        this.sellService.openDialog(event, type)
    }

}
