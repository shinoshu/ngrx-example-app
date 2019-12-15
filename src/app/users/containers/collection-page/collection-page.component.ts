import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UserAdditionalDialogComponent } from '../../components/user-additional-dialog/user-additional-dialog.component';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(UserAdditionalDialogComponent);
  }
}
