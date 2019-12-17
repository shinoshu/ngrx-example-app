import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 } from 'uuid';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-editing-dialog',
  templateUrl: './user-editing-dialog.component.html',
  styleUrls: ['./user-editing-dialog.component.scss']
})
export class UserEditingDialogComponent implements OnInit {
  form = this.fb.group({
    id: [v4()],
    name: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UserEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.form.patchValue(this.data.user);
  }

  submit() {
    this.matDialogRef.close(this.form.value);
  }
}
