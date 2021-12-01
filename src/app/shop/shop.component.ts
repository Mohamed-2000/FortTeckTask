import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/_models/product';
import { ShopService } from './shop.service';
import {AuthService} from '../shared/_service/auth.service';

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

  constructor(public productSer:ShopService, private auth:AuthService) { }

  addtionalServiceTotal:number=0;
  ngOnInit(): void {
    this.productSer.getProducts()
    .subscribe(res => {
      this.products = res;


    });
    this.addCart(this.products);
    this.cartDetails();
    this.loadCart();

  }

// inc(item:any) {
//   if (item.quantity != 10) {
//     item.quantity += 1;
//     console.log(item.quantity);
//   }
// }

// dec(item:any) {
//   if (item.quantity != 1) {
//     item.quantity -= 1;
//     console.log(item.quantity);
//   }
// }

  addCart(products:any) {
  localStorage.setItem("lacalCart", JSON.stringify(products));
  this.cartNumberFunc();
  }

  cartNumber:number = 0;
  cartNumberFunc()
  {
    if (localStorage.getItem("lacalCart") != null) {
        var cartValue = JSON.parse(localStorage.getItem('lacalCart') as string);
        //console.log(cartCount);

        this.cartNumber = cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
        console.log(this.cartNumber);

    }
  }

  getCartDetails:any=[];
  cartDetails() {
    if (localStorage.getItem("lacalCart")) {
      this.getCartDetails = JSON.parse(localStorage.getItem('lacalCart') as string);
      console.log(this.getCartDetails);

    }
  }

  incqnt(prodId:any, qnt:any) {
    console.log(prodId);
    console.log(qnt);
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === prodId) {
        if (qnt != 10)
          this.getCartDetails[i].quantity = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('lacalCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  decqnt(prodId:any, qnt:any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === prodId) {
        if (qnt != 1)
          this.getCartDetails[i].quantity = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('lacalCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total:number = 0;
  loadCart () {
    if (localStorage.getItem("lacalCart")){
      this.getCartDetails = JSON.parse(localStorage.getItem('lacalCart') as string);
      this.total= this.getCartDetails.reduce(function (acc:any, val:any) {
        return acc + (val.salePrice * val.quantity);
      }, 0);
      }
    }


    countDownTimer = new Date("Dec 7, 2021, 21:59:59").getTime();

    expire:any;
    timer = setInterval(() => {
      var now = new Date().getTime();
      var distance = this.countDownTimer - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var h = hours < 10 ? `0${hours}` : hours;
      var m = minutes < 10 ? `0${minutes}` : minutes;
      var s = seconds < 10 ? `0${seconds}` : seconds;

      this.expire = h + "HOURS, " + m + ":" + s ;
      if (distance < 0) {
        clearInterval(this.timer);
      }
    })

    serviceTotal:number=0;
    displayCounter(count:any) {
      this.serviceTotal = count;
      console.log(count);
  }
}
