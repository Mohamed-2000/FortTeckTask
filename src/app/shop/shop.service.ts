import { Injectable } from '@angular/core';
import { Product } from '../shared/product';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private productList:Product[] = [
    new Product(1, "Air Red Pants", "Red/White", "L", 200.00, 100.00, "../../assets/img/airRedPants.jpg", 1),
    new Product(2, "Air Red Pants", "Red/White", "L", 200.00, 100.00, "../../assets/img/airRedPants.jpg", 1),
    new Product(3, "Air Red Pants", "Red/White", "L", 200.00, 100.00, "../../assets/img/airRedPants.jpg", 1),

  ];

  constructor() { }

  getProducts() {
    return this.productList;
  }
}
