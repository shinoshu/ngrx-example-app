import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdditionalButtonComponent } from './user-additional-button.component';

describe('UserAdditionalButtonComponent', () => {
  let component: UserAdditionalButtonComponent;
  let fixture: ComponentFixture<UserAdditionalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdditionalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdditionalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
