import { Isurvey } from './serveys';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TestService} from './test.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
constructor(public TestService:TestService){

}
Surveys:any

ngOnInit(): void {
  this.TestService.getServey().subscribe( data =>this.Surveys=data);
  
  }
  selectedSurveys?: Isurvey;


}


