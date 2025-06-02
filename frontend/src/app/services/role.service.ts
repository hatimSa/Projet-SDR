import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model'; // Corrige le chemin si nécessaire

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://localhost:8080/api/roles'; // Change l'URL selon ton backend

  constructor(private http: HttpClient) { }

  // 1. Récupérer la liste des rôles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // 2. Supprimer un rôle par ID
  deleteRole(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // BONUS : pour les autres actions que tu pourrais faire ensuite

  // Ajouter un rôle
  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  // Récupérer un rôle par ID
  getRoleById(id: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un rôle
  updateRole(id: string, roleData: Partial<Role>): Observable<Role> {
    return this.http.put<Role>(`${this.apiUrl}/${id}`, roleData);
  }
}