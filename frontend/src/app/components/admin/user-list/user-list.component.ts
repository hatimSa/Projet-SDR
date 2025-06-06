import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: users => this.users = users,
      error: err => {
        console.error('Erreur chargement users', err);
        alert('Erreur lors du chargement des utilisateurs');
      }
    });
  }

  addUser(): void {
    this.router.navigate(['/admin/users/add']);
  }

  editUser(user: User): void {
    if (user.id !== undefined) {
      this.router.navigate(['/admin/users/edit', user.id]);
    }
  }

  deleteUser(id: string | undefined): void {
    if (id === undefined) {
      console.error('Cannot delete user: ID is undefined.');
      return;
    }

    const userIdStr = id.toString();

    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }

    this.userService.deleteUser(userIdStr).subscribe({
      next: () => {
        console.log('User deleted');
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    });
  }

  toggleUserEtat(user: User): void {
    const newEtat = user.etat === 1 ? 0 : 1;
    const updatedUser = { ...user, etat: newEtat };

    this.userService.updateUser(user.id!, updatedUser).subscribe({
      next: () => {
        user.etat = newEtat; // mettre à jour l'état localement
      },
      error: (err) => {
        console.error('Erreur lors du changement d\'état :', err);
        alert('Échec du changement de l\'état de l\'utilisateur.');
      }
    });
  }
}