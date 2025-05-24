import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {UserAddComponent} from "./components/admin/user-add/user-add.component";
import {UserEditComponent} from "./components/admin/user-edit/user-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationSuccessComponent,
    NavbarComponent,
    UserDashboardComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfilComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
