import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AdditionalServiceComponent } from './additional-service/additional-service.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopComponent,
    DeliveryComponent,
    AdditionalServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
