import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import des navbar standalone
import { AdminNavbarComponent } from './components/admin/navbar/navbar.component';
import { UserNavbarComponent } from './components/user/navbar/navbar.component';

// Import du profil standalone
import { ProfilComponent } from './components/user/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationSuccessComponent,
    UserDashboardComponent
    // Plus aucune navbar ici car standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfilComponent,       // standalone component
    AdminNavbarComponent,UserNavbarComponent   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
