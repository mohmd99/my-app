import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { Isurvey } from '../serveys';
import { TestService } from '../test.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public TestService:TestService) { }





  ngOnInit(): void {
this.x=JSON.parse(this.servey.SurveyPeriods);
console.log(this.selectedSurveys)
  }
x:any

@Input() servey: any;
@Input() selectedSurveys: any;
onSelect(servey: Isurvey): void {
  this.selectedSurveys = servey;
}

}


