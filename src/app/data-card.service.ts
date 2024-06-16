import { Injectable } from '@angular/core';
import { Card } from './card/card.model';

@Injectable({
  providedIn: 'root'
})
export class DataCardService {

  constructor() { }

  dataCard: Card[] = [
    {
      srcImg:"assets/images/figurineasterix.jpg",
      altImg: "Figurine d'Astérix",
      cardTitle: "Figurine Astérix",
      price: 39.90
    },

    {
      srcImg:"assets/images/figurineobelixetsontonneau.webp",
      altImg: "Figurine d'Obélix avec un tonneau",
      cardTitle: "Figurine Obélix - Obélix et son tonneau",
      price: 55.90
    },

    {
      srcImg:"assets/images/figurineidefix.webp",
      altImg: "Figurine d'Idéfix",
      cardTitle: "Figurine Idéfix",
      price: 30.90
    },

    {
      srcImg:"assets/images/figurinepanoramix.jpg",
      altImg: "Figurine de Panoramix",
      cardTitle: "Figurine Panoramix",
      price: 24.90
    },

    {
      srcImg:"assets/images/figurineasterixpartoutatis.webp",
      altImg: "Figurine d'Astérix, \"par toutatis\"",
      cardTitle: "Figurine Astérix \"par toutatis\"",
      price: 59.90
    },

    {
      srcImg:"assets/images/figurineabraracourcix.jpg",
      altImg: "Figurine d'Abraracourcix",
      cardTitle: "Figurine Abraracourcix",
      price: 24.90
    },

    {
      srcImg:"assets/images/figurineassurancetourix.jpg",
      altImg: "Figurine d'Assurancetourix",
      cardTitle: "Figurine Assurancetourix",
      price: 24.90
    },

    {
      srcImg:"assets/images/figurineobelixpilealbum.webp",
      altImg: "Figurine de Obélix portant une pile d'album",
      cardTitle: "Figurine Obélix - pile d'album",
      price: 49.90
    }
  ]

  aboutTitle = "Notre histoire";
  aboutText1 = "Notre passion pour l'univers d'Astérix et Obélix nous a poussés à créer des figurines faites main, capturant l'esprit et les aventures de nos héros gaulois préférés. Chaque pièce est unique et réalisée avec amour.";
  aboutText2 = "Fondée en 2022, notre entreprise réunit des artisans talentueux dédiés à la création de figurines de haute qualité. En puisant notre inspiration dans les aventures gauloises, nous souhaitons vous faire rêver avec nos créations."
}
