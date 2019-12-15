import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';



@NgModule({
  declarations: [CollectionPageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
