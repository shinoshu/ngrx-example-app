import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';

const routes: Routes = [
  { path: '', component: CollectionPageComponent, data: { title: 'Collection' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
