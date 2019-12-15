import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-additional-button',
  templateUrl: './user-additional-button.component.html',
  styleUrls: ['./user-additional-button.component.scss']
})
export class UserAdditionalButtonComponent implements OnInit {
  @Output() openDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
