import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent } from './components/profile/profile.component';
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {UserAddComponent} from "./components/admin/user-add/user-add.component";
import {UserEditComponent} from "./components/admin/user-edit/user-edit.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegistrationSuccessComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'admin/users', component: UserListComponent },
  { path: 'admin/users/add', component: UserAddComponent },
  { path: 'admin/users/edit/:id', component: UserEditComponent },
  { path: 'admin/profile', component: ProfileComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
