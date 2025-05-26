import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';// Pour les formulaires réactifs
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import {UserNavbarComponent} from "./components/user/navbar/navbar.component";
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {UserAddComponent} from "./components/admin/user-add/user-add.component";
import {UserEditComponent} from "./components/admin/user-edit/user-edit.component";

import { AdminNavbarComponent } from './components/admin/navbar/navbar.component';
import { UserNavbarComponent } from './components/user/navbar/navbar.component';

import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';


// IMPORTANT : importer ReactiveFormsModule ici aussi
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationSuccessComponent,
<<<<<<< 19327930d52cc5a33ead3bff53d205eac5e9b4f0
    UserDashboardComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent
=======
    UserDashboardComponent  // ici, non standalone, donc déclaré
>>>>>>> configuration des navs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
<<<<<<< 19327930d52cc5a33ead3bff53d205eac5e9b4f0
    HttpClientModule,
    ProfileComponent,
    AdminNavbarComponent,
    UserNavbarComponent
=======
    ProfileComponent,       // standalone, donc importé ici
    AdminNavbarComponent,   // standalone
    UserNavbarComponent,    // standalone
    UserAddComponent,UserEditComponent       // standalone
>>>>>>> configuration des navs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
