import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdditionalService } from 'src/app/shared/_models/additionalSer';
import { AdditionalServiceService } from 'src/app/shared/_service/additional-service.service';

@Component({
  selector: 'app-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.scss']
})
export class AdditionalServiceComponent implements OnInit {

  addtionalList:AdditionalService[] = [];
  constructor(private addSer:AdditionalServiceService) { }

  ngOnInit(): void {
    this.addtionalList = this.addSer.GetAdditional();
    console.log(this.addtionalList);

  }




  @Output() valueChange:EventEmitter<number> = new EventEmitter<number>();
  count:number=0;



  changed() {
    this.addtionalList.forEach(item => {
       if (item['isChecked']) {
        this.count += item.price as number;
          // console.log(this.count);

       }
       else{
        this.count = 0;

        // console.log(this.count);

       }
       this.valueChange.emit(this.count);

      console.log(this.count);


    })
 }
}
