import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './product-content/product-content.model';
import { ProductsService } from './products.service';

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
      // L'expression régulière est utilisée pour ne pas prendre en compte
      // le premier mot "Figurine" de chaque valeur des clés productTitle,
      // ainsi que l'espace après le premier mot pour faciliter la recherche  
      // de l'utilisateur.
      let titleWithoutFirstWord = product.productTitle.replace(/^[^\s]+\s*/, '').toLowerCase();
      return titleWithoutFirstWord.startsWith(searchText);
    });
  }
}
