import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private HttpClient:HttpClient) { }

  register(data:any){
   return this.HttpClient.post('http://upskilling-egypt.com:3001/contact', data)

  }
}
