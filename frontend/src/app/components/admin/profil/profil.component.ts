import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminNavbarComponent  as AdminNavbarComponent } from '../navbar/navbar.component';  // chemin vers navbar admin

@Component({
  selector: 'app-admin-profil',
  standalone: true,
  imports: [ReactiveFormsModule, AdminNavbarComponent],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  profilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profilForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.profilForm.valid) {
      console.log('Form submitted:', this.profilForm.value);
      // ton traitement ici
    }
  }
}
