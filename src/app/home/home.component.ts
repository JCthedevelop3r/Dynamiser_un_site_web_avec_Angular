import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../product-content/product-content.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Le type de la propriété "products" correspond au tableau "Product[]"
  // provenant du fichier "card.model.ts".
  products: Products[] = [];

  isClickedAsc: boolean = false;
  isClickedDesc: boolean = false;

  searchText: string = '';

  toggleSortOrder(order: string): void {
    if (order === 'asc') {
      this.isClickedAsc = true;
      this.isClickedDesc = false;
    } else if (order === 'desc') {
      this.isClickedAsc = false;
      this.isClickedDesc = true;
    }
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.dataProducts;
  }
}