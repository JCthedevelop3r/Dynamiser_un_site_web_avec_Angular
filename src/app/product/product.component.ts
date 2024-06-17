import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../product-content/product-content.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Products[] = [];

  productId: any;
  product: any;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productsService.dataProducts;

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productsService.dataProducts.find(x => x.id == this.productId);
    console.log(this.productId);
  }
}
