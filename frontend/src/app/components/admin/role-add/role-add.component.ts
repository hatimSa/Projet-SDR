import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'] // Assure-toi que ce fichier existe
})
export class RoleAddComponent implements OnInit {
  roleForm!: FormGroup;
  roleId?: number;
  errorMessages: any = {};

  // IMPORTANT : router est public pour être accessible dans le template HTML
  constructor(
    private fb: FormBuilder,
    public router: Router,          // <--- modifié private -> public
    private route: ActivatedRoute,
    // private roleService: RoleService // injecte ton service si tu en as un
  ) {}

  ngOnInit(): void {
    this.roleId = this.route.snapshot.params['id']; // récupère id pour edit, sinon undefined
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    if (this.roleId) {
      this.loadRole(this.roleId);
    }
  }

  loadRole(id: number) {
    // Exemple avec service pour récupérer le rôle par id
    // this.roleService.getRoleById(id).subscribe({
    //   next: (role) => this.roleForm.patchValue(role),
    //   error: (err) => console.error(err)
    // });
  }
   onCancel(): void {
    this.router.navigate(['/admin/roles']);
  }
  onSubmit() {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }
    

    const roleData = this.roleForm.value;

    if (this.roleId) {
      // Mise à jour du rôle
      // this.roleService.updateRole(this.roleId, roleData).subscribe(() => {
      //   this.router.navigate(['/admin/roles']);
      // });
    } else {
      // Création du rôle
      // this.roleService.createRole(roleData).subscribe(() => {
      //   this.router.navigate(['/admin/roles']);
      // });
    }
  }
}
