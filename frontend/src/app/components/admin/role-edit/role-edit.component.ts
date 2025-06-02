import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  roleForm!: FormGroup;
  roleId!: string;
  isEditMode = false;
  errorMessages: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.roleId = this.route.snapshot.paramMap.get('id')!;
    this.isEditMode = !!this.roleId;

    if (this.isEditMode) {
      this.loadRole(this.roleId);
    }
  }

  loadRole(id: string): void {
    this.roleService.getRoleById(id).subscribe({
      next: (role) => {
        if (role) {
          this.roleForm.patchValue(role);
        } else {
          this.errorMessages.load = 'Role not found.';
        }
      },
      error: (err) => {
        console.error('Error loading role:', err);
        this.errorMessages.load = 'Unable to load role details.';
      }
    });
  }

  onSubmit(): void {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }

    const roleData = this.roleForm.value;

    if (this.isEditMode) {
      this.roleService.updateRole(this.roleId, roleData ).subscribe({
        next: () => this.router.navigate(['/admin/roles']),
        error: (err) => {
          console.error('Error updating role:', err);
          this.errorMessages.submit = 'Failed to update role.';
        }
      });
    } else {
      this.roleService.addRole(roleData).subscribe({
        next: () => this.router.navigate(['/admin/roles']),
        error: (err) => {
          console.error('Error creating role:', err);
          this.errorMessages.submit = 'Failed to create role.';
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/roles']);
  }
}
