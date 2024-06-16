import { Injectable } from '@angular/core';
import { Card } from './card/card.model';

@Injectable({
  providedIn: 'root'
})
export class DataCardService {

  constructor() { }

  

  aboutTitle = "Notre histoire";
  aboutText1 = "Notre passion pour l'univers d'Astérix et Obélix nous a poussés à créer des figurines faites main, capturant l'esprit et les aventures de nos héros gaulois préférés. Chaque pièce est unique et réalisée avec amour.";
  aboutText2 = "Fondée en 2022, notre entreprise réunit des artisans talentueux dédiés à la création de figurines de haute qualité. En puisant notre inspiration dans les aventures gauloises, nous souhaitons vous faire rêver avec nos créations."
}
