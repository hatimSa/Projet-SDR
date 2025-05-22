import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importation de la fonction pour démarrer l'application Angular
import { AppModule } from './app/app.module'; // Importation du module principal de l'application

// Démarrage de l'application Angular en utilisant le module principal 'AppModule'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    console.error('Erreur lors de l\'initialisation de l\'application:', err);
  });
