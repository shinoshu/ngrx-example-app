import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '../../models';
// import * as fromAuth from '@example-app/auth/reducers';
// import { LoginPageActions } from '@example-app/auth/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // pending$ = this.store.pipe(select(fromAuth.selectLoginPagePending));
  // error$ = this.store.pipe(select(fromAuth.selectLoginPageError));

  // constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {}

  onSubmit(credentials: Credentials) {
    // this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
