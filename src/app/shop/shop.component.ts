import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products:Product[] = [];
  constructor(public productSer:ShopService) { }

  ngOnInit(): void {
    this.products = this.productSer.getProducts();

  }

}
