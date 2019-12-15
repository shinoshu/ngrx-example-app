import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
  }
}
