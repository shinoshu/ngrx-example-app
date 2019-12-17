import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-deletion-button',
  templateUrl: './user-deletion-button.component.html',
  styleUrls: ['./user-deletion-button.component.scss']
})
export class UserDeletionButtonComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() openDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
