import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { UserAdditionalDialogComponent } from '../../components/user-additional-dialog/user-additional-dialog.component';
import { addUser } from '../../actions/user.actions';
import * as fromUsers from '../../reducers/users.reducer';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private store: Store<fromUsers.State>
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserAdditionalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(addUser({ user: result }));
    });
  }
}
