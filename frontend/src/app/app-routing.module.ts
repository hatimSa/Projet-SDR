import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirection racine vers home

  // Routes publiques
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegistrationSuccessComponent },
  { path: 'admin-dashboard', component: DashboardAdminComponent },
  // Routes utilisateur
  { path: 'profile', component: ProfileComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },

  { path: 'admin/users', component: UserListComponent },
  { path: 'admin/users/add', component: UserAddComponent },
  { path: 'admin/users/edit/:id', component: UserEditComponent },
  { path: 'admin/profile', component: ProfileComponent },

  // Route wildcard pour rediriger les URL inconnues vers home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
