import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    const config = (window as any).appConfig;
    if (!config?.apiBaseUrl) {
      throw new Error('API URL not found in appConfig');
    }
    this.baseUrl = `${config.apiBaseUrl}/v1/role`;
  }

  private getAuthHeaders(): HttpHeaders | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getRoles(): Observable<Role[]> {
    const headers = this.getAuthHeaders();
    if (!headers) return of([]);
    return this.http.get<Role[]>(`${this.baseUrl}/getAll`, { headers }).pipe(
      catchError(() => of([]))
    );
  }

  getRoleById(id: string): Observable<Role | null> {
    const headers = this.getAuthHeaders();
    if (!headers) return of(null);
    return this.http.get<Role>(`${this.baseUrl}/${id}`, { headers }).pipe(
      catchError(() => of(null))
    );
  }

  addRole(role: Role): Observable<Role | null> {
    const headers = this.getAuthHeaders();
    if (!headers) return of(null);
    return this.http.post<Role>(`${this.baseUrl}/save`, role, { headers }).pipe(
      catchError(() => of(null))
    );
  }

  updateRole(id: string, role: Role): Observable<Role | null> {
    const headers = this.getAuthHeaders();
    if (!headers) return of(null);
    return this.http.put<Role>(`${this.baseUrl}/${id}`, role, { headers }).pipe(
      catchError(() => of(null))
    );
  }

  deleteRole(id: string): Observable<boolean> {
    const headers = this.getAuthHeaders();
    if (!headers) return of(false);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers }).pipe(
      catchError(() => of(false)),
      // Map response to true on success
      map(() => true)
    );
  }

  userHasRole(userRoles: string[], roleName: string): boolean {
    return userRoles.includes(roleName);
  }
}