import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showUserNavbar = true;
  showAdminNavbar = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      const url = event.urlAfterRedirects;

      const hideNavbarRoutes = ['/home', '/login', '/register', '/register-success'];
      if (hideNavbarRoutes.some(route => url.startsWith(route))) {
        this.showUserNavbar = false;
        this.showAdminNavbar = false;
      } else if (url.startsWith('/admin')) {
        this.showUserNavbar = false;
        this.showAdminNavbar = true;
      } else {
        this.showUserNavbar = true;
        this.showAdminNavbar = false;
      }
    });
  }
}
