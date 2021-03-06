import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public TestService: TestService, public dialog: MatDialog) {
    this.list.push({ name: 'Guillermo del Toro' });
  }
  AllSurvey: any;
  servey: any;
  Surveys: any;
  permission: any;
  ngOnInit(): void {
    this.TestService.getServey().subscribe((data) => {
      this.Surveys = data;
      this.AllSurvey = this.Surveys;
    });
  }
  list = [];
}
