import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card/card.model';
import { DataCardService } from './data-card.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(cards: Card[], searchText: string): Card[] {
    if (!searchText) {
      return cards;
    }

    searchText = searchText.toLowerCase();
    return cards.filter(card => {
      // L'expression régulière est utilisée pour ne pas prendre en compte
      // le premier mot "Figurine" de chaque valeur des clés cardTitle,
      // ainsi que l'espace après le premier mot pour faciliter la recherche  
      // de l'utilisateur.
      let titleWithoutFirstWord = card.cardTitle.replace(/^[^\s]+\s*/, '').toLowerCase();
      return titleWithoutFirstWord.startsWith(searchText);
    });
  }
}
