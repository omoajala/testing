import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { TestDataComponent } from '../../components/test-data/test-data.component';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(
    private http: HttpClient
  ) { }

  getSeatData() {
    return this.http.get('data/seats.json')
      
  }

}
