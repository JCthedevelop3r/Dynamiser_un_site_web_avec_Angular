import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './product-content/product-content.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: Products[], searchText: string): Products[] {
    if (!searchText) {
      return products;
    }

    searchText = searchText.toLowerCase();
    return products.filter(product => {
      return product.productTitle.toLowerCase().includes(searchText);
    });
  }
}
