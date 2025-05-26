import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // pour le DOM
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Composants classiques (non standalone)
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistrationSuccessComponent } from './components/register-success/registration-success.component';
import { ProfileComponent } from './components/profile/profile.component';  // standalone
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';

// Composants standalone (importés dans imports)
import { AdminNavbarComponent } from './components/admin/navbar/navbar.component';
import { UserNavbarComponent } from './components/user/navbar/navbar.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { UserEditComponent } from './components/admin/user-edit/user-edit.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { RoleListComponent } from './components/admin/role-list/role-list.component';
import { RoleAddComponent } from './components/admin/role-add/role-add.component';
import { RoleEditComponent } from './components/admin/role-edit/role-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegistrationSuccessComponent,
    UserDashboardComponent,
    UserListComponent,
    DashboardAdminComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileComponent,       // standalone
    AdminNavbarComponent,   // standalone    // standalone
    UserAddComponent,       // standalone
    UserEditComponent       // standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
