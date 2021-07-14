import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product = {};
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  addProduct() {
    this.productService
      .addProductInCart(this.product)
      .subscribe((product: any[]) => {
      });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((product: any[]) => {
      this.products = product;
    });
  }

  onOptionsSelected(value: string) {
    this.product = { ...this.product, _id: value };
  }

  onQuantitySelected(e: any) {
    e.stopPropagation();
    this.product = { ...this.product, amount: e.target.value };
  }
}
