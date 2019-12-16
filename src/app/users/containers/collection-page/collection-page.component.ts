import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserAdditionalDialogComponent } from '../../components/user-additional-dialog/user-additional-dialog.component';
import { UserEditingDialogComponent } from '../../components/user-editing-dialog/user-editing-dialog.component';
import { addUser, deleteUser, deleteUsers } from '../../actions/user.actions';
import * as fromUsers from '../../reducers/index.reducer';
import { User } from '../../models/user';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUsers: User[];

  constructor(
    private dialog: MatDialog,
    private store: Store<fromUsers.State>
  ) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromUsers.selectAllUsers));
  }

  setSelectedUsers(users: User[]) {
    this.selectedUsers = users;
  }

  openAdditionalDialog() {
    const dialogRef = this.dialog.open(UserAdditionalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(addUser({ user: result }));
      }
    });
  }

  openEditingDialog() {
    const dialogRef = this.dialog.open(UserEditingDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(addUser({ user: result }));
      }
    });
  }

  // TODO: openDeletionDialog
  delete() {
    const ids = this.selectedUsers.map(user => user.id);
    this.store.dispatch(deleteUsers({ ids }));
  }
}
