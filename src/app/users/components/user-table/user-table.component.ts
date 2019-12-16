import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() dataSource: User[];

  displayedColumns: string[] = ['name', 'email'];

  constructor() { }

  ngOnInit() {
  }
}
