import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=> HomeModule
  },
  {
    path : 'roles',
    loadChildren: () => RolesModule
  },
  {
    path : 'users',
    //loadChildren: () => UsersModule
    //below is lazy loading
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
