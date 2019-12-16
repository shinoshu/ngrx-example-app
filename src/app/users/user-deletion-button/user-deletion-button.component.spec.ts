import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletionButtonComponent } from './user-deletion-button.component';

describe('UserDeletionButtonComponent', () => {
  let component: UserDeletionButtonComponent;
  let fixture: ComponentFixture<UserDeletionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeletionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
