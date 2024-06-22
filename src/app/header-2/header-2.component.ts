import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header-2',
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.css'
})
export class Header2Component implements OnInit {
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

