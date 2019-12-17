import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { UsersRoutingModule } from './users-routing.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';

import { MaterialModule } from '../material';
import { UserAdditionalDialogComponent } from './components/user-additional-dialog/user-additional-dialog.component';
import { UserAdditionalButtonComponent } from './components/user-additional-button/user-additional-button.component';
import * as fromUsers from './reducers/users.reducer';
import { UserEditingButtonComponent } from './components/user-editing-button/user-editing-button.component';
import { UserDeletionButtonComponent } from './components/user-deletion-button/user-deletion-button.component';
import { UserEditingDialogComponent } from './components/user-editing-dialog/user-editing-dialog.component';

@NgModule({
  declarations: [CollectionPageComponent, UserTableComponent, UserAdditionalDialogComponent, UserAdditionalButtonComponent, UserEditingButtonComponent, UserDeletionButtonComponent, UserEditingDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.reducer),
    UsersRoutingModule,
    MaterialModule,
  ],
  entryComponents: [
    UserAdditionalDialogComponent,
    UserEditingDialogComponent,
  ],
})
export class UsersModule { }
