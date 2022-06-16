import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpclient: HttpClient) { }

  getUserdetails(){
    let url= ''
    return this.httpclient.get(url) 
  }
}
