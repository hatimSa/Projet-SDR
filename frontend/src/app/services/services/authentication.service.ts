import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080'; // base URL

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/v1/auth/login`, credentials).pipe(
      tap(response => {
        console.log('Réponse du serveur (login) :', response); // Affichage de la réponse du serveur dans la console
      }),
      catchError(this.handleError)
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/v1/auth/register`, user);
  }

  private handleError(error: any): Observable<never> {
    // Gestion des erreurs plus détaillée
    if (error.error instanceof ErrorEvent) {
      console.error('Erreur côté client :', error.error.message);
    } else {
      console.error(`Erreur côté serveur : code ${error.status}, ` + `message: ${error.message}`);
    }
    return throwError('Quelque chose a mal tourné; veuillez réessayer plus tard.');
  }
}
