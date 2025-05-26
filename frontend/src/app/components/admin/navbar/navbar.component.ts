import { Component } from '@angular/core';
import {RouterLinkActive} from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    RouterLinkActive,
    [RouterModule]
  ],
  standalone: true,
})
export class AdminNavbarComponent {}
