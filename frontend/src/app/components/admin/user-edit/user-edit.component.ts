import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]  // <-- ajoute CommonModule ici
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  userId: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.userForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userDetails: this.fb.group({
        firstName: [''],
        lastName: [''],
        phoneNumber: [''],
        country: [''],
        city: [''],
        address: [''],
        postalCode: [''],
        aboutMe: [''],
        profilePicture: ['']
      })
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(user => {
      this.userForm.patchValue({
        id: user.id,
        username: user.username,
        email: user.email,
        userDetails: {
          firstName: user.userDetails?.firstName || '',
          lastName: user.userDetails?.lastName || '',
          phoneNumber: user.userDetails?.phoneNumber || '',
          country: user.userDetails?.country || '',
          city: user.userDetails?.city || '',
          address: user.userDetails?.address || '',
          postalCode: user.userDetails?.postalCode || '',
          aboutMe: user.userDetails?.aboutMe || '',
          profilePicture: user.userDetails?.profilePicture || ''
        }
      });
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
        this.router.navigate(['/admin/users']);
      });
    }
  }
}
