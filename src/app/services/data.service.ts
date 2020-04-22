import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }
   

  async getDataBeers(){
    return await this.apiService.get();
  }

  async getDataCount(count){
    return await this.apiService.getCount('?per_page='+count);
  }
}
