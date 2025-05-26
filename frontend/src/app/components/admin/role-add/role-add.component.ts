import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {
  roleForm!: FormGroup;
  errorMessages: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.router.navigate(['/admin/roles']);
  }

  onSubmit(): void {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }

    const roleData = this.roleForm.value;

    this.roleService.addRole(roleData).subscribe({
      next: () => this.router.navigate(['/admin/roles']),
      error: (err) => {
        console.error('Error creating role:', err);
        this.errorMessages.submit = 'Failed to create role.';
      }
    });
  }
}
