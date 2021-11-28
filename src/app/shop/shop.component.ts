import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products:Product[] = [];
  public OrderSummary !: number;

  public previous_value:number = 0;

  constructor(public productSer:ShopService) { }

  ngOnInit(): void {
    this.productSer.getProducts()
    .subscribe(res => {
      this.products = res;
      this.OrderSummary = this.productSer.getTotalPrice();

      this.products.forEach((a:any) => {

        Object.assign(a,{quantity:a.quantity,total:a.price});
      });
    });
    console.log(this.products);

  }

  // addToCart(e:any, item:Product) {
  //   console.log(e.target.value);
  //   if (e.target.value >= 1) {

  //     if (this.previous_value < e.target.value) {
  //       if (item.quantity != undefined) {
  //         item.quantity = item.quantity + 1;
  //       }
  //       this.productSer.addtoCart(item)
  //     }
  //     else {
  //       if (item.quantity != undefined) {
  //         item.quantity -=  1;
  //         this.productSer.removeCartItem(item);
  //       }
  //     }


  //   }
  //   else{

  //     this.productSer.removeCartItem(item);

  //   }
  //   this.previous_value = e.target.value;
  // }

  addToCart(e:any, item:any){
    console.log(item);

  }

}
