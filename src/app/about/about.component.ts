import { Component, OnInit } from '@angular/core';
import { DataCardService } from '../data-card.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  aboutTitle: string = "";
  aboutText1: string = "";
  aboutText2: string = "";

  constructor(private dataCardService: DataCardService) {}

ngOnInit() {
  this.aboutTitle = this.dataCardService.aboutTitle;
  this.aboutText1 = this.dataCardService.aboutText1;
  this.aboutText2 = this.dataCardService.aboutText2;
}

}