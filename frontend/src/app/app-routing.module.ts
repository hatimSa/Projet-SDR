import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfilComponent } from './components/user/profil/profil.component';       // Profil utilisateur
import { ProfilComponent as ProfilComponentAdmin } from './components/admin/profil/profil.component';  // Profil admin (même classe, renommée ici)
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirection racine vers home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-success', component: RegistrationSuccessComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil-admin', component: ProfilComponentAdmin },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: '**', redirectTo: 'home' }  // fallback vers home pour routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
