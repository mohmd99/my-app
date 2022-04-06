import { DataSource } from '@angular/cdk/collections';
import { Isurvey } from './../serveys';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableComponent } from './table/table.component';
import { TestService } from '../test.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor(public TestService: TestService, public dialog: MatDialog) {}
  tabs = {
    '0': { title: 'All Survey' },
    '1': { title: 'Published' },
    '2': { title: 'Expired' },
    '3': { title: 'Closed' },
  };
  filterArray?: any;
  select: any;
  searchText = '';
  servey: any;
  Surveys: any;
  ngOnInit(): void {
    this.TestService.getServey().subscribe((data) => {
      this.Surveys = data;
      this.filterArray = this.Surveys;
    });
  }
  @ViewChild(TableComponent) child?: TableComponent;

  tabChanged(sevent: any): any {
    if (sevent.tab.textLabel !== 'All Survey') {
      this.filterArray = this.Surveys.filter((x: any) =>
        x.SURVEY_STATUS_EN.includes(sevent.tab.textLabel)
      );
    } else {
      this.filterArray = this.Surveys;
    }
  }

  showCard: boolean = true;
  buttonCard() {
    this.showCard = true;
    this.showtable = false;
  }
  showtable: boolean = false;
  buttonTable() {
    this.showtable = true;
    this.showCard = false;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
      data: { SurveyNameEn: this.select.SurveyNameEn },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.select.SurveyNameEn = result;

      console.log('Data from Dialog:' + result);
    });
  }
  done(selectedSurveys: any) {
    this.TestService.currentSelectedSurvey = selectedSurveys?.TEMPLATE_ID;
    this.select = selectedSurveys;
  }
}
