import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../product-content/product-content.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productContent: Products[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productContent = this.productsService.dataProducts;
  }
}
