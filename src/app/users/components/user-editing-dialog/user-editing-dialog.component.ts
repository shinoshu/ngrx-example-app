import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { v4 } from 'uuid';

@Component({
  selector: 'app-user-editing-dialog',
  templateUrl: './user-editing-dialog.component.html',
  styleUrls: ['./user-editing-dialog.component.scss']
})
export class UserEditingDialogComponent implements OnInit {
  form = this.fb.group({
    id: [v4()],
    name: [''],
    email: [''],
  });

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UserEditingDialogComponent>,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.matDialogRef.close(this.form.value);
  }
}
