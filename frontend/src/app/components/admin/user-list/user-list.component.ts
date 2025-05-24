import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
// user-list.component.ts
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser(): void {
    this.router.navigate(['/admin/users/add']);
  }

  editUser(user: User): void {
    if (user.id !== undefined) {
      this.router.navigate(['/admin/users/edit', user.id]);
    }
  }

  deleteUser(id: number | undefined): void {
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
        // Remove the deleted user from the users array
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    });
  }
}
