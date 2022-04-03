import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { TestService } from '../test.service';

const EXAMPLE_DATA: DataTableItem[] = [
  { id: 1, name: 'Hydrogen', state: 'puplish' },
  { id: 2, name: 'Helium', state: 'puplish' },
  { id: 3, name: 'Lithium', state: 'puplish' },
  { id: 4, name: 'Beryllium', state: 'puplish' },
  { id: 5, name: 'Boron', state: 'expired' },
  { id: 6, name: 'Carbon', state: 'closed' },
  { id: 7, name: 'Nitrogen', state: 'expired' },
  { id: 8, name: 'Oxygen', state: 'puplish' },
  { id: 9, name: 'Fluorine', state: 'puplish' },
  { id: 10, name: 'Neon', state: 'expired' },
  { id: 11, name: 'Sodium', state: 'puplish' },
  { id: 12, name: 'Magnesium', state: 'puplish' },
  { id: 13, name: 'Aluminum', state: 'puplish' },
  { id: 14, name: 'Silicon', state: 'puplish' },
  { id: 15, name: 'Phosphorus', state: 'expured' },
  { id: 16, name: 'Sulfur', state: 'puplish' },
  { id: 17, name: 'Chlorine', state: 'puplish' },
  { id: 18, name: 'Argon', state: 'closed' },
  { id: 19, name: 'Potassium', state: 'puplish' },
  { id: 20, name: 'Calcium', state: 'puplish' },
];
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'state'];
  ngOnInit(): void {
  
  }
  constructor() {
    this.dataSource = new DataTableDataSource();
  }
  @Input() servey: any;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
