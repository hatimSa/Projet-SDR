import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< 19327930d52cc5a33ead3bff53d205eac5e9b4f0
  showUserNavbar = false;
  showAdminNavbar = false;
  title = 'gestion_user';
=======
  title = 'frontend';
  showUserNavbar = true;
  showAdminNavbar = true;
  showNavbar = true;
>>>>>>> configuration des navs

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const url = event.urlAfterRedirects;

        const hideNavbarRoutes = ['/login', '/register', '/register-success','/home'];

        this.showNavbar = !hideNavbarRoutes.includes(url);

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
          this.showUserNavbar = false;
          this.showAdminNavbar = false;
        }
      });
  }
}
