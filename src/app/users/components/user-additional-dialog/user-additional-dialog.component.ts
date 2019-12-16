import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { v4 } from 'uuid';

@Component({
  selector: 'app-user-additional-dialog',
  templateUrl: './user-additional-dialog.component.html',
  styleUrls: ['./user-additional-dialog.component.scss']
})
export class UserAdditionalDialogComponent implements OnInit {
  form = this.fb.group({
    id: [v4()],
    name: ['', Validators.required],
    email: ['', Validators.required],
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
