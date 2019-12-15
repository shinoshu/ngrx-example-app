import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [CollectionPageComponent, UserTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
  ]
})
export class UsersModule { }
