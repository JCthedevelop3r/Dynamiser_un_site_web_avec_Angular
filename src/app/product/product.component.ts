import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../product-content/product-content.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Products[] = [];

  productId: any;
  product: any;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  productShoppingBagCounter: number = 0;

  addToCart() {
    this.dataService.showSpan();
  }

  ngOnInit() {
    this.products = this.productsService.dataProducts;

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productsService.dataProducts.find(x => x.id == this.productId);
    console.log('L\'utilisateur a cliqué sur l\'id numéro ' + this.productId);
  }
}
