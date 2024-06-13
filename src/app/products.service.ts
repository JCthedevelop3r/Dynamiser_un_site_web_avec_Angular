import { Injectable } from '@angular/core';
import { Products } from './product-content/product-content.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  dataProducts: Products[] = [
    {
      srcImg:"assets/images/figurineasterix.jpg",
      altImg: "Figurine d'Astérix",
      productTitle: "Figurine Astérix",
      productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores.Dolorem placeat accusamus accusantium temporibus.",
      price: "39,90€"
    }
  ]
}
