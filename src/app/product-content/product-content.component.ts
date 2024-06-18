import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';

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
}
