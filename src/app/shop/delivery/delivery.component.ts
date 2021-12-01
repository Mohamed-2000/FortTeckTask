import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Delivery = [
    {
      id : 1,
      name : 'DPD Delivers',
      img : '../../../assets/img/DPD logo.png',
      ExpectedDate: 'Friday, 28',
      price: 5.25
    },
    {
      id : 2,
      name : 'FedEx Fast Delivery',
      img : '../../../assets/img/fedex.png',
      ExpectedDate: 'Friday, 28',
      price: 7.25
    },
    {
      id : 3,
      name : 'UPS Delivers',
      img : '../../../assets/img/UPS-Logo.png',
      ExpectedDate: 'Friday, 28',
      price: 5.50
    },
    {
      id : 4,
      name : 'Collect in Person',
      img : '../../../assets/img/box.jpg',
      ExpectedDate: 'Thursday, 27',
      price: 'Free'
    }
  ]
}
