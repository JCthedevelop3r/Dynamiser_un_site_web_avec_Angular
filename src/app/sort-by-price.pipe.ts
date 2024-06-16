import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card/card.model';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {


  transform(cards: Card[], isAsc: boolean, isDesc: boolean): Card[] {
    if (isAsc) {
      return cards.sort((a, b) => a.price - b.price);
    } else if (isDesc) {
      return cards.sort((a, b) => b.price - a.price);
    }
    return cards;
  }
}