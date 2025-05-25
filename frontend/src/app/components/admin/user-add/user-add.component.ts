import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { UserService } from 'src/app/services/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
// user-add.component.ts
export class UserAddComponent {
  userForm: FormGroup;
  userId: string = '';
  errorMessages: any = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: () => {
          this.router.navigate(['/admin/users']);
        },
        error: (error) => {
          if (error.status === 400 && error.error) {
            this.errorMessages = error.error;
          } else {
            console.error('Unexpected error:', error);
          }
        }
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
