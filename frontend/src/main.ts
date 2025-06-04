import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Load configuration before bootstrapping Angular
fetch('/assets/config/config.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(config => {
    // Save config to a global variable (e.g., window object)
    (window as any).appConfig = config;

    // Now bootstrap the application
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error('Erreur lors de l\'initialisation de l\'application:', err));
  })
  .catch(err => {
    console.error('Erreur lors du chargement de la configuration:', err);
  });
