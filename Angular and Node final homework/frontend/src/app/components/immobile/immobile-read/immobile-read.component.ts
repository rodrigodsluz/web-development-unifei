import { HeaderService } from '../../template/header/header.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Immobile } from '../../../models/immobile.model';
import { ImmobileService } from '../../../services/immobile.service';

@Component({
    selector: 'app-immobile-read',
    templateUrl: './immobile-read.component.html',
    styleUrls: ['./immobile-read.component.css']
})
export class ImmobileReadComponent implements OnInit {

    immobiles: Immobile[] = [];
    displayedColumns = ['imgPath', 'description', 'price', 'nameSeller', 'type', 'date', 'action'];
    types = [];
    oldImmobiles: Immobile[] = [];

    constructor(private immobileService: ImmobileService, private headerService: HeaderService) { }

    ngOnInit(): void {
        this.immobileService.read().subscribe(immobiles => {
            this.immobiles = immobiles;
            this.oldImmobiles = immobiles;
            this.types = this.immobiles.map(function(element) {
                return element.type;
            });
            //remove duplicates
            this.types = [... new Set(this.types)];
        })
    }

    openDialog(event: string, type: string) {
        this.immobileService.openDialog(event, type)
    }

    filterImmobile(type: string){
        this.immobiles = this.oldImmobiles;
        this.immobiles = this.immobiles.filter(function(element) {
            return element.type == type;
        });
    }
}
