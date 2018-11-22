import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';

// import { SeatModel } from '../../components/lola-testing/lola-testing.component'; 

@Injectable()
export class LolaService {

  constructor(
    private http: Http) { }

  getSeatData() {
    return this.http.get('data/seats.json')
      // .pipe(map((res: Response) => res.json().response.subscribe((seat: SeatModel) => new SeatModel().deserialize(seat)))
  }

}