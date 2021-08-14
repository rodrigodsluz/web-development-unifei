import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Immobile } from 'src/app/models/immobile.model';
import { ImmobileService } from 'src/app/services/immobile.service';

@Component({
  selector: 'app-immobile-delete',
  templateUrl: './immobile-delete.component.html',
  styleUrls: ['./immobile-delete.component.css']
})
export class ImmobileDeleteComponent implements OnInit {
  immobile: Immobile = {} as Immobile;

  constructor(
    private immobileService: ImmobileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.immobileService.readById(id).subscribe((immobile) => {
      this.immobile = immobile;
    });
  }

  deleteImmobile(): void {
    this.immobileService.delete(this.immobile._id).subscribe(() => {
      this.immobileService.showMessage("Imóvel excluído com sucesso!");
      this.router.navigate(["/immobiles"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/immobiles"]);
  }
}
