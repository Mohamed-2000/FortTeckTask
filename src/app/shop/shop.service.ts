import { Injectable } from '@angular/core';
import { Product } from '../shared/_models/product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
    public cartItemList : any =[];
    public productList = new BehaviorSubject<any>([
      new Product(1, "Air Red Pants", "Red/White", "L", 200.00, 100.00, "../../assets/img/airRedPants.jpg", 1),
      new Product(2, "Count Dri-Fit", "Dark Blue", "L", 200.00, 100.00, "../../assets/img/count Dri-fit.jpg", 1),
      new Product(3, "SportsWear Heritage Windrunner", "Blue/White", "L", 200.00, 200.00, "../../assets/img/sweaters.jpg", 1),
    ]);


  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }




}
