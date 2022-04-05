import { TableComponent } from './table/table.component';
import { Isurvey } from './serveys';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {
  Component,
  OnInit,
  Inject,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestService } from './test.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public TestService: TestService, public dialog: MatDialog) {}

  term?: string;
  servey: any;
  Surveys: any;
  select: any;
  template: any;
  AllSurvey: any;
  ngOnInit(): void {
    this.TestService.getServey().subscribe((data) => {
      this.Surveys = data;
      this.AllSurvey = this.Surveys;
    });
  }
  searchText = '';
  list = {
    name: 'Yeman',
  };
  done(selectedSurveys: any) {
    this.TestService.currentSelectedSurvey = selectedSurveys?.TEMPLATE_ID;
    this.select = selectedSurveys;
  }
  @ViewChild(TableComponent) child!: TableComponent;
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
  filterArray?: Isurvey;

  tabChanged(sevent: any): any {
    this.filterArray = this.Surveys.filter((x: any) =>
      x.SURVEY_STATUS_EN.includes(sevent.tab.textLabel)
    );
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
}
