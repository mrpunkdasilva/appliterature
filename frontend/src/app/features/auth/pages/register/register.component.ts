import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="register-container">
      <div class="register-card">
        <h1>Create Account</h1>
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              formControlName="username"
              placeholder="Choose a username"
            >
            <div class="error-message" *ngIf="registerForm.get('username')?.touched && registerForm.get('username')?.errors?.['required']">
              Username is required
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              placeholder="your@email.com"
            >
            <div class="error-message" *ngIf="registerForm.get('email')?.touched">
              <span *ngIf="registerForm.get('email')?.errors?.['required']">Email is required</span>
              <span *ngIf="registerForm.get('email')?.errors?.['email']">Invalid email format</span>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              placeholder="••••••••"
            >
            <div class="error-message" *ngIf="registerForm.get('password')?.touched">
              <span *ngIf="registerForm.get('password')?.errors?.['required']">Password is required</span>
              <span *ngIf="registerForm.get('password')?.errors?.['minlength']">Password must be at least 8 characters</span>
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              formControlName="confirmPassword"
              placeholder="••••••••"
            >
            <div class="error-message" *ngIf="registerForm.get('confirmPassword')?.touched">
              <span *ngIf="registerForm.get('confirmPassword')?.errors?.['required']">Password confirmation is required</span>
              <span *ngIf="registerForm.errors?.['passwordMismatch']">Passwords do not match</span>
            </div>
          </div>

          <div class="form-actions">
            <button
              type="submit"
              class="btn-register"
              [disabled]="registerForm.invalid || isLoading"
            >
              {{ isLoading ? 'Creating account...' : 'Create Account' }}
            </button>
          </div>
        </form>

        <div class="login-prompt">
          <p>Already have an account?</p>
          <a routerLink="/auth/login" class="btn-login">Login</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 1rem;
      background: var(--surface-ground);
    }

    .register-card {
      background: var(--surface-card);
      padding: 2rem;
      border-radius: 8px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--text-color);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--surface-border);
      border-radius: 4px;
      background: var(--surface-ground);
      color: var(--text-color);
      transition: border-color 0.2s;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
      }
    }

    .error-message {
      color: var(--red-500);
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .btn-register {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      background: var(--primary-color);
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover:not(:disabled) {
        background: var(--primary-600);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .login-prompt {
      margin-top: 2rem;
      text-align: center;

      p {
        margin-bottom: 0.5rem;
        color: var(--text-color-secondary);
      }

      .btn-login {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    const { username, email, password } = this.registerForm.value;

    this.authService.register(username, email, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']); // Navega para a página inicial após o registro
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.isLoading = false;
        // Aqui você pode adicionar uma lógica para mostrar mensagens de erro
      }
    });
  }
}
