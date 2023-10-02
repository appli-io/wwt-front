import { AfterViewInit, Component, forwardRef, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule }              from '@angular/material/table';
import { ActivatedRoute }                                  from '@angular/router';
import { MatButtonModule }                                 from '@angular/material/button';
import { MatSort, MatSortModule }                          from '@angular/material/sort';

import { TableComponent } from '../../../../shared/components/table/table.component';
import { UsersService }   from '../../service/users.service';
import { IResponseUser }  from '../../interfaces/response-user.interface';
import { DatePipe }       from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: [ './users-list.component.scss' ],
  imports: [ MatButtonModule, forwardRef(() => TableComponent), MatSortModule, MatTableModule, TableComponent, DatePipe ],
  standalone: true
})
export class UsersListComponent {
  @ViewChild(TableComponent, {static: true}) table: TableComponent<IResponseUser>;
  title: string = 'Users';
  displayedColumns: string[] = [ 'position', 'name', 'weight', 'symbol' ];
  dataSource: MatTableDataSource<IResponseUser>;

  @ViewChild('sort') sort: MatSort;

  constructor(private readonly route: ActivatedRoute,
              private readonly usersService: UsersService
  ) {
    // get title from data in route
    this.title = this.route.snapshot.data['title'];

    // get users from service
    this.usersService.getAll().subscribe((users) => {
      this.dataSource = new MatTableDataSource<IResponseUser>(users.content);
      this.dataSource.sort = this.sort;
    });
  }
}
