import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BEER_URL = " https://api.punkapi.com/v2/beers";
  constructor(private httpClient: HttpClient) { }

 async get(){
  return this.httpClient.get<IBeer>(this.BEER_URL).toPromise();
 }
}
