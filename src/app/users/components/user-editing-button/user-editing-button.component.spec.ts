import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditingButtonComponent } from './user-editing-button.component';

describe('UserEditingButtonComponent', () => {
  let component: UserEditingButtonComponent;
  let fixture: ComponentFixture<UserEditingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
