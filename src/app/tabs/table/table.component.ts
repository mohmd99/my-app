import { TestService } from '../../test.service';
import { Isurvey } from '../../serveys';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'radio',
    'SURVEY_STATUS_EN',
    'SurveyNameEn',
    'START_DATE',
    'END_DATE',
    'Period',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(TestService: TestService) {}
  @Input() servey: any;
  ngOnInit(): void {
    if (this.servey && typeof this.servey.value == 'string') {
      this.servey.map(
        (x: any) => (x.SurveyPeriods = JSON.parse(x.SurveyPeriods))
      );
    }
    this.dataSourse = new MatTableDataSource(this.servey);
  }
  ngOnChanges(changes: TableComponent): void {
    this.dataSourse = new MatTableDataSource(this.servey);
    this.dataSourse.paginator = this.paginator;
    this.dataSourse.sort = this.sort;
  }
  dataSourse: MatTableDataSource<Isurvey>;
  selectedValue: any;
  ngAfterViewInit() {
    this.dataSourse.paginator = this.paginator;
    this.dataSourse.sort = this.sort;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSourse.filter = filterValue?.trim().toLowerCase();

    if (this.dataSourse.paginator) {
      this.dataSourse.paginator.firstPage();
    }
    console.log(this.dataSourse.filter);
  }
  @Output() newevent = new EventEmitter();

  selectedSurveys?: Isurvey;

  onSelect(servey: Isurvey): void {
    if (this.selectedSurveys != servey) {
      this.selectedSurveys = servey;
      console.log(this.selectedSurveys);
      this.newevent.emit(this.selectedSurveys);
    }
  }
}
