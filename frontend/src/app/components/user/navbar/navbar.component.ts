import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class UserNavbarComponent {
  showUserNavbar = true;
  showAdminNavbar = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      const url = event.urlAfterRedirects;

      const hideNavbarRoutes = ['/home', '/login', '/register', '/register-success'];
      const userNavbarRoutes = ['/user', '/profile', '/dashboard']; // Routes où la navbar doit s'afficher

      if (hideNavbarRoutes.some(route => url.startsWith(route))) {
        this.showUserNavbar = false;
        this.showAdminNavbar = false;
      } else if (userNavbarRoutes.some(route => url.startsWith(route))) {
        this.showUserNavbar = true;
        this.showAdminNavbar = false;
      } else if (url.startsWith('/admin')) {
        this.showUserNavbar = false;
        this.showAdminNavbar = true;
      } else {
        this.showUserNavbar = false;
        this.showAdminNavbar = false;
      }
    });
  }
}
