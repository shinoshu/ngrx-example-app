import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers';
import { LayoutActions } from '../../actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.selecthowSidenav));
    // this.loggedIn$ = this.store.pipe(select(fromAuth.selectLoggedIn));
  }

  closeSidenav() {
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  logout() {
    // this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
