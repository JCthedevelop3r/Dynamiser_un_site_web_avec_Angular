import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    this.hideLinks();
  }

  hideLinks(): any {
    let navBarCollapse = document.getElementById('navbarNav')
    if(navBarCollapse !== null) {
      navBarCollapse.classList.remove('show');
    } else {
      console.log('navbarToggler est null');
    }
  }
}
