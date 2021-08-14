import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Immobile } from '../../../models/immobile.model';
import { ImmobileService } from '../../../services/immobile.service';

@Component({
    selector: 'app-immobile-create',
    templateUrl: './immobile-create.component.html',
    styleUrls: ['./immobile-create.component.css']
})
export class ImmobileCreateComponent implements OnInit {

    immobile: Immobile = {
        _id: '',
        description: null,
        price: null,
        nameSeller: null,
        date: null,
        type: null,
        imgPath: null,
        toSell: true
    }

    types = ['casa', 'apartamento', 'sala comercial', 'lote', 'chácara', 'sítio', 'fazenda'];

    @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

    constructor(
        private immobileService: ImmobileService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    uploadFileEvt(imgFile: any) {
        if (imgFile.target.files && imgFile.target.files[0]) {
            // HTML5 FileReader API
            let reader = new FileReader();
            reader.onload = (e: any) => {
                let image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const imgBase64Path = e.target.result;
                    this.immobile.imgPath = imgBase64Path
                };
            };
            // console.log(imgFile.target);
            reader.readAsDataURL(imgFile.target.files[0]);
        }
    }

    createImmobile() {
        this.immobile.date = this.immobile.date + 'T01:00:00';
        this.immobileService.create(this.immobile).subscribe(() => {
            this.immobileService.showMessage('Imóvel cadastrado com sucesso')
            this.router.navigate(['/immobiles'])
        })
    }

    cancel() {
        this.router.navigate(['/immobiles'])
    }

}
