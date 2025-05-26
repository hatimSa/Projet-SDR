import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/services/user.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
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
    this.loadUserProfile();
    this.profileForm.get('username')?.disable();
  }

  loadUserProfile() {
    this.userService.getCurrentUserProfile().subscribe({
      next: (user) => {
        this.profileForm.patchValue({
          id: user.id || '',   // <-- patch id here
          username: user.username || '',
          email: user.email || '',
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
      },
      error: (err) => {
        console.error('Failed to load user profile', err);
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;

      const updatedDetails = {
        id: this.profileForm.get('id')?.value,  // <-- include id here
        username: formValue.username,
        email: formValue.email,
        userDetails: {
          firstName: formValue.userDetails.firstName,
          lastName: formValue.userDetails.lastName,
          phoneNumber: formValue.userDetails.phoneNumber,
          country: formValue.userDetails.country,
          city: formValue.userDetails.city,
          address: formValue.userDetails.address,
          postalCode: formValue.userDetails.postalCode,
          aboutMe: formValue.userDetails.aboutMe,
          profilePicture: formValue.userDetails.profilePicture
        }
      };

      console.log("Submitting profile update:", updatedDetails);

      this.userService.updateUserProfile(updatedDetails).subscribe({
        next: (res) => {
          console.log('Profile updated successfully', res);
        },
        error: (err) => {
          console.error('Error updating profile', err);
        }
      });
    }
  }
}
