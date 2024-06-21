import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.css'
})
export class ProductContentComponent {
  @Input() srcImg: string = '';
  @Input() altImg: string = '';
  @Input() productTitle: string = '';
  @Input() productDescription: string = '';
  @Input() price: number = 0;
  @Input() productId: string = '';

  productShoppingBagCounter: number = 0;

  constructor(private dataService: DataService) { }

  addToCart() {
    this.dataService.showSpan();
  }
}
