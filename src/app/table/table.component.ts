import { DataSource } from '@angular/cdk/collections';
import { TestService } from './../test.service';
import { Isurvey } from './../serveys';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
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
  ];
  dataSource!: MatTableDataSource<Isurvey>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(TestService: TestService) {}
  @Input() servey: any;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.servey);
    let c = this.servey.map((x: any) => JSON.parse(x.SurveyPeriods));
    console.log(c[0][0].START_DATE);
  }
  c: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
