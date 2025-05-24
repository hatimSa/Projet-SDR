import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // Cacher la navbar sur les routes home, login, register
      const hideNavbarRoutes = ['/home', '/login', '/register'];
      this.showNavbar = !hideNavbarRoutes.includes(event.urlAfterRedirects);
    });
  }
}
