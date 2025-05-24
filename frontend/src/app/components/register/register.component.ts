import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registrationForm: FormGroup;
  errorMessage: string = '';  // Variable pour stocker le message d'erreur
  successMessage: string = '';  // Variable pour stocker le message de succès

  constructor(
    private authenticationService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      // nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value; // Récupère les valeurs du formulaire
      this.authenticationService.register(user).subscribe(
        response => {
          console.log('Utilisateur enregistré:', response);
          this.successMessage = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
          // Rediriger vers la page register-success après 2 secondes
          setTimeout(() => this.router.navigate(['/register-success']), 2000);
        },
        error => {
          console.error('Erreur lors de l\'inscription:', error);
          if (error.status === 400 && error.error.message === 'User already exists.') {
            this.errorMessage = 'Cet e-mail est déjà utilisé. Veuillez en essayer un autre.';
          } else {
            this.errorMessage = 'Erreur lors de l\'inscription, veuillez réessayer.';
          }
        }
      );
    } else {
      console.log('Formulaire invalide');
      this.errorMessage = 'Veuillez remplir correctement le formulaire';
    }
  }
}
