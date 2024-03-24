import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private _HttpClient: HttpClient) {}
  fetchApi(): Observable<any> {
    return this._HttpClient.get(
      'https://api.weatherapi.com/v1/forecast.json?key=ed96676879c2458baae185515241903&q=egypt&days=14&hour=15&aqi=no&alerts=no'
    );
  }
}
