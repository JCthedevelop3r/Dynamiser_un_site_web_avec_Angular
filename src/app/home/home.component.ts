import { Component, OnInit } from '@angular/core';
import { DataCardService } from '../data-card.service';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Le type de la propriété "cards" correspond au tableau "Card[]"
  // provenant du fichier "card.model.ts".
  cards: Card[] = [];
  originalCards: Card[] = [];

  searchText: string = '';

  isClickedAsc: boolean = false;
  isClickedDesc: boolean = false;

  ascClickCount: number = 0;
  descClickCount: number = 0;

  // L'utilisation du modulo permet d'activer tel ordre lorsque
  // l'utilisateur clique une première fois et de le désactiver 
  // lorsqu'il re-clique sur le même ordre.
  toggleSortOrder(order: string): void {
    if (order === 'asc') {
      this.ascClickCount++;
      if(this.isClickedAsc = this.ascClickCount % 2 !== 0) {
        this.isClickedAsc = true;
        this.isClickedDesc = false;
        console.log('Ordre croissant activé(nombre de clic impair)');
      } else {
        this.isClickedAsc = false;
        this.cards = [...this.originalCards];
        console.log('Ordre croissant désactivé(nombre de clic pair)')
      }
    } else if (order === 'desc') {
      this.descClickCount++;
      if(this.isClickedDesc = this.descClickCount % 2 !== 0) {
        this.isClickedDesc = true;
        this.isClickedAsc = false;
        console.log('Ordre décroissant activé(nombre de clic impair)');
      } else {
        this.isClickedDesc = false;
        this.cards = [...this.originalCards];
        console.log('Ordre décroissant désactivé(nombre de clic pair)');
      }
    }
  }

  constructor(private dataCardService: DataCardService) {}

  ngOnInit() {
    this.cards = this.dataCardService.dataCard;
    this.originalCards = [...this.cards]; // Stocke l'ordre original des cards
  }
}