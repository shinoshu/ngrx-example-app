import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserAdditionalDialogComponent } from '../../components/user-additional-dialog/user-additional-dialog.component';
import { addUser } from '../../actions/user.actions';
import * as fromUsers from '../../reducers/index.reducer';
import { User } from "../../models/user";

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private dialog: MatDialog,
    private store: Store<fromUsers.State>
  ) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromUsers.selectAllUsers));
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserAdditionalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(addUser({ user: result }));
    });
  }
}
