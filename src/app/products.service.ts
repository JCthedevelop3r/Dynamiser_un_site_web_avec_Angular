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
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 39.90
      },
  
      {
        srcImg:"assets/images/figurineobelixetsontonneau.webp",
        altImg: "Figurine d'Obélix avec un tonneau",
        productTitle: "Figurine Obélix - Obélix et son tonneau",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 55.90
      },
  
      {
        srcImg:"assets/images/figurineidefix.webp",
        altImg: "Figurine d'Idéfix",
        productTitle: "Figurine Idéfix",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 30.90
      },
  
      {
        srcImg:"assets/images/figurinepanoramix.jpg",
        altImg: "Figurine de Panoramix",
        productTitle: "Figurine Panoramix",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 24.90
      },
  
      {
        srcImg:"assets/images/figurineasterixpartoutatis.webp",
        altImg: "Figurine d'Astérix, \"par toutatis\"",
        productTitle: "Figurine Astérix \"par toutatis\"",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 59.90
      },
  
      {
        srcImg:"assets/images/figurineabraracourcix.jpg",
        altImg: "Figurine d'Abraracourcix",
        productTitle: "Figurine Abraracourcix",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 24.90
      },
  
      {
        srcImg:"assets/images/figurineassurancetourix.jpg",
        altImg: "Figurine d'Assurancetourix",
        productTitle: "Figurine Assurancetourix",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 24.90
      },
  
      {
        srcImg:"assets/images/figurineobelixpilealbum.webp",
        altImg: "Figurine de Obélix portant une pile d'album",
        productTitle: "Figurine Obélix - pile d'album",
        productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis justo quis tellus tristique rutrum. Aenean sollicitudin dictum libero.",
        price: 49.90
      }
  ]
}
