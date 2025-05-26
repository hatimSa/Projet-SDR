import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Role {
  id: number;
  name: string;
}

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
  // styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  roles: Role[] = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Manager' }
  ];

  constructor(private router: Router) {}

   addRole() {
    this.router.navigate(['/admin/roles/add']); // adapte l'URL selon ta route
  }

  editRole(role: Role) {
  this.router.navigate(['admin/roles/edit', role.id]);
}


  deleteRole(id: number) {
    if(confirm('Are you sure you want to delete this role?')) {
      this.roles = this.roles.filter(role => role.id !== id);
    }
  }
}
