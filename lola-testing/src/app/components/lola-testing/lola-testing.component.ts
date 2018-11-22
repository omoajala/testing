import { Component, OnInit } from '@angular/core';
import { LolaService } from '../../services/lola-testing/lola.service';
import { Deserializable } from '../deserialize.component';
import { map } from 'rxjs/operators';
// import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

interface seatFormation {
  seat: string;
  class: string;
  row: Number;
}

@Component({
  selector: 'app-lola-testing',
  templateUrl: './lola-testing.component.html',
  styleUrls: ['./lola-testing.component.css']
})
export class LolaTestingComponent implements OnInit {

  seatdata: any;

  constructor(
    public service: LolaService,
  ) { }

  ngOnInit() {
    this.service.getSeatData()
      .subscribe((data: any) => {
        this.seatdata = data;

        console.log(this.seatdata)
      })
  }

  // getSeatInfo() {
  //   this.service.getSeatData()
  //     .subscribe((data: any) => {

  //       console.log(data)
  //       this.seatdata = JSON.parse(JSON.stringify(data))

  //       let obj: { SEATDATA: seatFormation[] } = JSON.parse(JSON.stringify(data))
  //       console.log(obj.SEATDATA)
        

  //       this.seatdata = res.
  //       const seat_data = JSON.stringify(seatdata)

  //       JSON.parse(seat_data, (key, value) => {
  //         console.log(value)
  //       }
  //     )}

  //     })

  //   }

}
