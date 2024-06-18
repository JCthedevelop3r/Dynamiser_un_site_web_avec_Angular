import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './product-content/product-content.model';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {


  transform(cards: Products[], isAsc: boolean, isDesc: boolean): Products[] {
    if (isAsc) {
      return cards.sort((a, b) => a.price - b.price);
    } else if (isDesc) {
      return cards.sort((a, b) => b.price - a.price);
    }
    return cards;
  }
}