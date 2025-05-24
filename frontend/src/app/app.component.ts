import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showUserNavbar = false;
  showAdminNavbar = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const url = event.urlAfterRedirects;

      // Routes où on cache toute navbar (exemple: /login, /register, /home)
      const hideNavbarRoutes = ['/home', '/login', '/register'];

      if (hideNavbarRoutes.includes(url)) {
        this.showUserNavbar = false;
        this.showAdminNavbar = false;
      } else if (url.startsWith('/user')) {
        this.showUserNavbar = true;
        this.showAdminNavbar = false;
      } else if (url.startsWith('/admin')) {
        this.showUserNavbar = false;
        this.showAdminNavbar = true;
      } else {
        // Cas par défaut (optionnel)
        this.showUserNavbar = false;
        this.showAdminNavbar = false;
      }
    });
  }
}
