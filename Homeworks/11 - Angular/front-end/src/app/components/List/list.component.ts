import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  showNotaFiscal() {
    let productInfo: any;

    let productInfoArray = [];

    this.productService.getItensCart().subscribe((product: any[]) => {

      product.map((i) => {

        productInfo = {
          valorUnitario: i.product[0].valorUnitario,
          descricao: i.product[0].descricao,
          desconto: i.product[0].desconto,
          codigo: i.product[0].codigo,
          amount: i.amount,
          total:
            i.product[0].valorUnitario * i.amount -
            i.product[0].valorUnitario * (i.product[0].desconto / 100) * i.amount,
        };
        productInfoArray.push(productInfo);
      });
      this.products = productInfoArray;
    });
  }
}
