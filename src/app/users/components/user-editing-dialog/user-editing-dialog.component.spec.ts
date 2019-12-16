import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditingDialogComponent } from './user-editing-dialog.component';

describe('UserEditingDialogComponent', () => {
  let component: UserEditingDialogComponent;
  let fixture: ComponentFixture<UserEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
