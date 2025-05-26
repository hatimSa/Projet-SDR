import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  roleForm!: FormGroup;
  roleId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer id dans url
    this.roleId = +this.route.snapshot.paramMap.get('id')!;

    // Initialiser formulaire
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    // Simuler chargement des données si édition
    if (this.roleId) {
      // Ici tu récupères le role via API ou service
      // Exemple statique :
      const roleFromServer = { name: 'Admin', description: 'Role with all permissions' };

      this.roleForm.patchValue(roleFromServer);
    }
  }

  onSubmit() {
    if (this.roleForm.invalid) return;

    if (this.roleId) {
      console.log('Update role', this.roleId, this.roleForm.value);
      // Appel API update ici
    } else {
      console.log('Create role', this.roleForm.value);
      // Appel API création ici
    }

    this.router.navigate(['/admin/roles']);
  }

  onCancel() {
    this.router.navigate(['/admin/roles']);
  }
}
