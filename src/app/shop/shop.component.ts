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

  // public previous_value:any;
  public previous_value:number = 0;

  constructor(public productSer:ShopService) { }

  ngOnInit(): void {
    this.productSer.getProducts()
    .subscribe(res => {
      this.products = res;


    });
    this.loadCart();
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

  incQnt(e:any, prodId:any, qnt:any){

    // qnt = e.target.value;
    console.log(prodId);
    // console.log(qnt);
    for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].id === prodId) {

          if (this.previous_value < e.target.value)
          {
              this.products[i].quantity = parseInt(qnt) + 1;
              console.log(this.products[i].quantity);
              alert("increment");


          }
          else if (this.previous_value > e.target.value) {
              if (qnt != 1) {
                this.products[i].quantity = parseInt(qnt) - 1;
                console.log(this.products[i].quantity);
                alert("decrement");
              }

          }

          this.previous_value = e.target.value ;
      }
    }

  }

  // total:number = 0;
  // loadCart () {
  //   this.total = this.products.reduce(function (acc, val) {

  //       return acc + (val.salePrice * val.quantity);

  //   }, 0);
  // }


  loadCart () {
    this.OrderSummary = this.productSer.getTotalPrice();

      this.products.forEach((a:any) => {

        Object.assign(a,{quantity:a.quantity,total:a.salePrice * a.quantity});
      });

      console.log(this.OrderSummary);
  }

}
