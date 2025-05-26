import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe({
      next: (roles) => {
        console.log(roles);
        this.roles = roles.filter(role => role.id !== undefined) as Role[];
      },
      error: (err) => {
        console.error('Error loading roles', err);
        this.errorMessage = 'Failed to load roles';
      }
    });
  }

  addRole(): void {
    this.router.navigate(['/admin/roles/add']);
  }

  editRole(role: Role): void {
    this.router.navigate(['/admin/roles/edit', role.id]);
  }

  deleteRole(id: string): void {
    if (confirm('Are you sure you want to delete this role?')) {
      this.roleService.deleteRole(id).subscribe({
        next: () => {
          // Remove deleted role from list locally after success
          this.roles = this.roles.filter(role => role.id !== id);
        },
        error: (err) => {
          console.error('Error deleting role', err);
          this.errorMessage = 'Failed to delete role';
        }
      });
    }
  }
}
