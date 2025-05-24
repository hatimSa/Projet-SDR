import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "src/app/models/user.model";


@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8080/v1/user';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders | null {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return null;
    }
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getUsers(): Observable<User[]> {
    const headers = this.getAuthHeaders();
    if (!headers) return of([]);

    return this.http.get<User[]>(`${this.baseUrl}/getAll`, { headers }).pipe(
      catchError((error) => {
        console.error('An error occurred while fetching users:', error);
        return of([]);
      })
    );
  }

  addUser(user: User): Observable<any> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return throwError(() => new Error('No token found'));
    }

    return this.http.post(`${this.baseUrl}/save`, user, {
      headers,
      observe: 'response',
    });
  }

  getUserById(id: string) {
    const headers = this.getAuthHeaders();
    if (!headers) return of(null as any);

    return this.http.get<User>(`${this.baseUrl}/getUserById/${id}`, { headers });
  }

  updateUser(id: string, user: User): Observable<any> {
    const headers = this.getAuthHeaders();
    if (!headers) return of({ error: 'No token found' });

    return this.http.put(`${this.baseUrl}/update`, user, { headers }).pipe(
      catchError(error => {
        console.error('Error updating user:', error);
        return of({ error: error.message || 'Unknown error' });
      })
    );
  }

  deleteUser(id: string): Observable<any> {
    const headers = this.getAuthHeaders();
    if (!headers) return of({ error: 'No token found' });

    return this.http.delete(`${this.baseUrl}/deleteUserById/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return of({ error: error.message || 'Unknown error' });
      })
    );
  }
}
