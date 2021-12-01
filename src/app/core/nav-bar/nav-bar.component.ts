import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/_service/auth.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public totalItem : number = 0;

  public cartItemList : any =[];
  constructor(public productSer:ShopService, private auth:AuthService) {
    this.auth.cartSubject.subscribe((data) => {
      this.cartItem = data

    });
  }

  ngOnInit(): void {

    // this.totalItem = this.productSer.funalTotal;
    // console.log(this.totalItem);

    // this.productSer.cartItemList
    // .subscribe(res=>{
    //   this.totalItem = res.length;

    //   console.log("hello " + this.totalItem);

    // })

    this.productSer.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      // console.log("hello"+this.totalItem);

    })

    this.cartItemFunc();
  }

  cartItem:number = 0;
  cartItemFunc()
  {
    if (localStorage.getItem("lacalCart") != null) {
        var cartCount = JSON.parse(localStorage.getItem('lacalCart') as string);
        //console.log(cartCount);

        this.cartItem = cartCount.length;
    }
  }

}
