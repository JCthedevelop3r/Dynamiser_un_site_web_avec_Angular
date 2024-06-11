import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card/card.model';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(card: Card[], asc: boolean, desc: boolean): any[] {
    if(asc) {
      return card.sort((a:any, b:any) => {
        if(a.price < b.price) { return -1;
        } else if(a.price > b.price) {
        return 1;
        } else return 0;
      });
    } else if(desc) {
        return card.sort((a:any, b:any) => {
          if(a.price > b.price) { return -1;
          } else if(a.price < b.price) {
          return 1;
          } else return 0;
        });
    } else {
      return card;
    }
  }
}


