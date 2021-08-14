import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Immobile } from 'src/app/models/immobile.model';
import { ImmobileService } from 'src/app/services/immobile.service';

@Component({
    selector: 'app-immobile-update',
    templateUrl: './immobile-update.component.html',
    styleUrls: ['./immobile-update.component.css']
})
export class ImmobileUpdateComponent implements OnInit {
    immobile: Immobile = {} as Immobile;
    types = ['casa', 'apartamento', 'sala comercial', 'lote', 'chácara', 'sítio', 'fazenda'];


    @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

    constructor(
        private immobileService: ImmobileService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.immobileService.readById(id).subscribe((immobile) => {
            this.immobile = immobile;
            this.immobile.date = immobile.date.toString().split('T')[0];
        });
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
            reader.readAsDataURL(imgFile.target.files[0]);
        }
    }

    updateImmobile(): void {
        this.immobile.date = this.immobile.date + 'T01:00:00';
        this.immobileService.update(this.immobile).subscribe(() => {
            this.immobileService.showMessage("Imóvel atualizado com sucesso!");
            this.router.navigate(["/immobiles"]);
        });
    }

    cancel(): void {
        this.router.navigate(["/immobiles"]);
    }
}
