import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent as ProfileComponent } from './components/profile/profile.component';  // Profil admin (même classe, renommée ici)
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {UserAddComponent} from "./components/admin/user-add/user-add.component";
import {UserEditComponent} from "./components/admin/user-edit/user-edit.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegistrationSuccessComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },

  { path: 'admin/users', component: UserListComponent },
  { path: 'admin/profile', component: ProfileComponent },
  { path: 'admin/users/add', component: UserAddComponent },
  { path: 'admin/users/edit/:id', component: UserEditComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirection racine vers home
  { path: '**', redirectTo: 'home' }  // fallback vers home pour routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
