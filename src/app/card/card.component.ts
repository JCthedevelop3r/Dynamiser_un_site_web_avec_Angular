import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() srcImg: string = '';
  @Input() altImg: string = '';
  @Input() cardTitle: string = '';
  @Input() price: number = 0;
}
