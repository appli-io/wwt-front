import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
}                                                                                                                     from '@angular/material/table';
import { JsonPipe, NgIf }                                                                          from '@angular/common';
import { DataSource }                                                                              from '@angular/cdk/collections';

@Component({
  selector: 'wwt-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
  standalone: true,
  imports: [ MatTableModule, NgIf, JsonPipe ]
})
export class TableComponent<T> implements AfterContentInit {
  @Input() public dataSource!: DataSource<T>;
  @Input() columns: string[];
  // @Input() public loading: Observable<boolean>;
  // @Input() public trackByFn: (index: number, item: any) => any;

  @ViewChild(MatTable, {static: false}) table: MatTable<T>;

  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  // @ContentChildren(MatFooterCellDef) footerColumnDefs: QueryList<MatFooterCellDef>;

  @ContentChild(MatNoDataRow) noDataRow: MatNoDataRow;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.cdr.detectChanges();

    console.log('dataSource', (this.dataSource as MatTableDataSource<T>).data);
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));

    this.table.setNoDataRow(this.noDataRow);
    console.log('this.table', this.table);
  }
}
