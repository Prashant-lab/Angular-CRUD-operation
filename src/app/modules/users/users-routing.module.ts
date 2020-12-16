import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path: 'add',
    component : AddUserComponent
  },
  {
    path: 'edit/:userId',
    component : AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
