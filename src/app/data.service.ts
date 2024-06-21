import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  aboutTitle = "Notre histoire";
  aboutText1 = "Notre passion pour l'univers d'Astérix et Obélix nous a poussés à créer des figurines faites main, capturant l'esprit et les aventures de nos héros gaulois préférés. Chaque pièce est unique et réalisée avec amour.";
  aboutText2 = "Fondée en 2022, notre entreprise réunit des artisans talentueux dédiés à la création de figurines de haute qualité. En puisant notre inspiration dans les aventures gauloises, nous souhaitons vous faire rêver avec nos créations.";

  private productShoppingBagCounter = new BehaviorSubject<number>(0);
  productShoppingBagCounter$ = this.productShoppingBagCounter.asObservable();

  constructor() { }

  showSpan() {
    let spanCounter = document.getElementById('span-counter');
    if(spanCounter === null) {
      console.log('property spanCounter is null')
    } else { spanCounter.style.display = "inline-block"; }
    this.productShoppingBagCounter.next(this.productShoppingBagCounter.value + 1);
  }
}
