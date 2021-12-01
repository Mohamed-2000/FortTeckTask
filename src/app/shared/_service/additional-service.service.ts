import { Injectable } from '@angular/core';
import { AdditionalService } from '../_models/additionalSer';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {

  private addtionalList = [
    new AdditionalService(1, "Care + Package", 'One year of additional care', 10.00, true),
    new AdditionalService(2, "Environment Friendly", 'Add some tip for earth care', 2.00, false),
    new AdditionalService(3, "Golden Guard", '30 days more for return', 5.00, false),

  ];

  GetAdditional() {
    return this.addtionalList;
  }




  constructor() { }
}
