import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { DataCardService } from './data-card.service';
import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { ProductContentComponent } from './product-content/product-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    CardComponent,
    SortByPricePipe,
    FilterByNamePipe,
    ProductContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    DataCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
