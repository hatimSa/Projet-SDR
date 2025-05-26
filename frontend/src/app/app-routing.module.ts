import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {UserAddComponent} from "./components/admin/user-add/user-add.component";
import {UserEditComponent} from "./components/admin/user-edit/user-edit.component";


import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';





const routes: Routes = [
<<<<<<< 19327930d52cc5a33ead3bff53d205eac5e9b4f0
=======
  { path: '', redirectTo: 'home', pathMatch: 'full' },
>>>>>>> configuration des navs
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegistrationSuccessComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },

<<<<<<< 19327930d52cc5a33ead3bff53d205eac5e9b4f0
  { path: 'admin/users', component: UserListComponent },
  { path: 'admin/profile', component: ProfileComponent },
  { path: 'admin/users/add', component: UserAddComponent },
  { path: 'admin/users/edit/:id', component: UserEditComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirection racine vers home
  { path: '**', redirectTo: 'home' }  // fallback vers home pour routes inconnues
=======
  { path: 'admin-users', component: UserListComponent },
  { path: 'admin/users-add', component: UserAddComponent },
  { path: 'admin/users-edit/:id', component: UserEditComponent },

  { path: '**', redirectTo: 'home' }
>>>>>>> configuration des navs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
