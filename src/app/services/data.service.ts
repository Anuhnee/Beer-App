import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  async getBeers(){
    return await this.apiService.get();
  }
}
