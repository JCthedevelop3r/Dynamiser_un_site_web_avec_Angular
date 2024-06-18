import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  aboutTitle: string = "";
  aboutText1: string = "";
  aboutText2: string = "";

  constructor(private dataService: DataService) {}

ngOnInit() {
  this.aboutTitle = this.dataService.aboutTitle;
  this.aboutText1 = this.dataService.aboutText1;
  this.aboutText2 = this.dataService.aboutText2;
}

}