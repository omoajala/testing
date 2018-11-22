import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';

import { TestDataService } from '../../services/test-data/test-data.service';
import { Deserializable } from '../deserialize.component';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit, Deserializable {

  class: String;
  seat: String;
  row: Number;
  occupied: boolean;
  premium: boolean;
  overWing: boolean;

  data_: Array<string>;

  constructor(
    public service: TestDataService
  ) { }

  ngOnInit() {
    this.getDataFromService()
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  getDataFromService(){
    const d = this.service.getSeatData()
    .pipe(map((user: TestDataComponent) => new TestDataComponent(this.service).deserialize(user)))
    .subscribe((data: any) => {
      // console.log(data)
    })
  }

  getClass() {
    return this.class
  }



}
