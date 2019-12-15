import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import { MaterialModule } from '../material';
import { UserAdditionalDialogComponent } from './components/user-additional-dialog/user-additional-dialog.component';
import { UserAdditionalButtonComponent } from './components/user-additional-button/user-additional-button.component';

@NgModule({
  declarations: [CollectionPageComponent, UserTableComponent, UserAdditionalDialogComponent, UserAdditionalButtonComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
  ],
  entryComponents: [UserAdditionalDialogComponent],
})
export class UsersModule { }
