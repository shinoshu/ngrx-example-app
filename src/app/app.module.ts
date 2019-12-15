import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './core/containers';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    AppRoutingModule,
    CoreModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
