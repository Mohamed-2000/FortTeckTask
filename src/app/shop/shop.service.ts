import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
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

  // AddProducts(product:any) {
  //   this.productList.push(product);
  // }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    console.log(this.cartItemList.length)
  }



  getTotalPrice() : number{
    let orderSummary = 0;
    this.cartItemList.map((a:any)=>{
      orderSummary += a.total;
    })
    return orderSummary;
  }

}
