import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdditionalDialogComponent } from './user-additional-dialog.component';

describe('UserAdditionalDialogComponent', () => {
  let component: UserAdditionalDialogComponent;
  let fixture: ComponentFixture<UserAdditionalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdditionalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdditionalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
