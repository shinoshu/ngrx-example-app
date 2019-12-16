import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnChanges {
  @Input() users: User[];
  @Output() selected = new EventEmitter<User[]>();

  displayedColumns: string[] = ['select', 'position', 'name', 'email'];
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  constructor() { }

  ngOnInit() {
    this.selection.changed.subscribe(source => {
      this.selected.emit(source.source.selected);
    });
  }

  ngOnChanges() {
    this.dataSource.data = this.users.map((user, index) => {
      return {
        ...user,
        position: index,
      };
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
