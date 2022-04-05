import { Isurvey } from './../serveys';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(public TestService: TestService) {}
  ngOnInit(): void {
    if (typeof this.servey.SurveyPeriods == 'string') {
    this.servey.SurveyPeriods = JSON.parse(this.servey.SurveyPeriods);

  }
}
  x: any;

  @Input() servey: any;

  @Output() newevent = new EventEmitter();

  selectedSurveys?: Isurvey;

  onSelect(servey: Isurvey): void {
    if (this.selectedSurveys != servey) {
      this.selectedSurveys = servey;
      this.newevent.emit(this.selectedSurveys);
    } else {
    }
  }
}
