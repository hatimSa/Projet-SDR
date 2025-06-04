import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/services/authentication.service'; // ajuste le chemin si besoin
import { HttpClient } from '@angular/common/http'; // Importer HttpClient si nécessaire
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Injecter Router pour la redirection
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Appeler la méthode login du service AuthService
      this.authService.login({ username, password }).subscribe({
        next: (response) => {
          const token = response.token;
          localStorage.setItem('token', token);

          // const role = this.tokenUtils.getRoleFromToken(token); Fix it
          const role = "ADMIN"

          if (role === 'ADMIN') {
            this.router.navigate(['/admin/users']);
          } else if (role === 'USER') {
            this.router.navigate(['/user/home']);
          } else {
            this.router.navigate(['/unauthorized']);
          }
        },
        error: err => {
          console.error("Erreur de connexion", err);
          this.error = 'Échec de la connexion. Vérifie les identifiants.';
        }
      });
    } else {
      this.error = 'Veuillez remplir tous les champs correctement.';
    }
  }
}
