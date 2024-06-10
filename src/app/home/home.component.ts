import { Component, OnInit } from '@angular/core';
import { DataCardService } from '../data-card.service';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // Le type de la propriété "card" correspond au tableau "Card[]"
  // provenant du fichier "card.model.ts".
  cards: Card[] = [];

  constructor(private dataCardService: DataCardService) {}

  ngOnInit() {
    this.cards = this.dataCardService.dataCard;
  }
}