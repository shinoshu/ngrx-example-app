import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-user-additional-dialog',
  templateUrl: './user-additional-dialog.component.html',
  styleUrls: ['./user-additional-dialog.component.scss']
})
export class UserAdditionalDialogComponent implements OnInit {
  form = this.fb.group({
    name: [''],
    email: [''],
  });

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UserAdditionalDialogComponent>,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.matDialogRef.close(this.form.value);
  }
}
