import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public totalItem : number = 0;

  public cartItemList : any =[];
  constructor(public productSer:ShopService) { }

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
      console.log("hello"+this.totalItem);

    })
  }

}
