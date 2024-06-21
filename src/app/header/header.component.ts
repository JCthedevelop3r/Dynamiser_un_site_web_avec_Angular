import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  productShoppingBagCounter: number = 0;

  hideLinks(): any {
    let navBarCollapse = document.getElementById('navbarNav')
    if(navBarCollapse !== null) {
      navBarCollapse.classList.remove('show');
    } else {
      console.log('property navbarToggler is null');
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.productShoppingBagCounter$.subscribe(counter => {
      this.productShoppingBagCounter = counter;
    });
  }
}
