import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleHeaders();
      window.addEventListener('resize', this.toggleHeaders.bind(this));
    }
  }

  toggleHeaders(): void {
    const viewportWidth = window.innerWidth;
    console.log('Current viewport width:', viewportWidth);
    const header1 = document.getElementById('header-1');
    const header2 = document.getElementById('header-2');

    if (viewportWidth < 992) {
      if (header1) header1.style.display = 'block';
      if (header2) header2.style.display = 'none';
    } else {
      if (header1) header1.style.display = 'none';
      if (header2) header2.style.display = 'block';
    }
  }
}
