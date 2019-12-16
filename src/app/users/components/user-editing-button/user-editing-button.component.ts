import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-editing-button',
  templateUrl: './user-editing-button.component.html',
  styleUrls: ['./user-editing-button.component.scss']
})
export class UserEditingButtonComponent implements OnInit {
  @Output() openDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
