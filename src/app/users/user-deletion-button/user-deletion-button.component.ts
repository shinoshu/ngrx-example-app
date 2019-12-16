import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-deletion-button',
  templateUrl: './user-deletion-button.component.html',
  styleUrls: ['./user-deletion-button.component.scss']
})
export class UserDeletionButtonComponent implements OnInit {
  @Output() openDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
