import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Isurvey}from './serveys'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private HttpClient:HttpClient) { }

  getServey(){
     return this.HttpClient.get<Isurvey[]>('https://mocki.io/v1/acdec257-dba2-448d-842d-8a0a4f0f2883')
  }
}
