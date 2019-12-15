import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
