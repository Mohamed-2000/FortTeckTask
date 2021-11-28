import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
    public cartItemList : any =[];
    public productList = new BehaviorSubject<any>([
      new Product(1, "Air Red Pants", "Red/White", "L", 200.00, 100.00, "../../assets/img/airRedPants.jpg", 0),
    new Product(2, "Count Dri-Fit", "Dark Blue", "L", 200.00, 100.00, "../../assets/img/count Dri-fit.jpg", 0),
    new Product(3, "SportsWear Heritage Windrunner", "Blue/White", "L", 200.00, 200.00, "../../assets/img/sweaters.jpg", 0),
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

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  getTotalPrice() : number{
    let orderSummary = 0;
    this.cartItemList.map((a:any)=>{
      orderSummary += a.total;
    })
    return orderSummary;
  }

}
