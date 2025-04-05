import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
            <div class="error-message" *ngIf="registerForm.get('username')?.errors?.['required'] && registerForm.get('username')?.touched">
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
            <div class="error-message" *ngIf="registerForm.get('email')?.errors?.['required'] && registerForm.get('email')?.touched">
              Email is required
            </div>
            <div class="error-message" *ngIf="registerForm.get('email')?.errors?.['email'] && registerForm.get('email')?.touched">
              Invalid email format
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
            <div class="error-message" *ngIf="registerForm.get('password')?.errors?.['required'] && registerForm.get('password')?.touched">
              Password is required
            </div>
            <div class="error-message" *ngIf="registerForm.get('password')?.errors?.['minlength'] && registerForm.get('password')?.touched">
              Password must be at least 8 characters
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
            <div class="error-message" *ngIf="registerForm.errors?.['passwordMismatch'] && registerForm.get('confirmPassword')?.touched">
              Passwords do not match
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-register" [disabled]="registerForm.invalid || isLoading">
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
      min-height: calc(100vh - 200px);
      padding: 2rem;
    }

    .register-card {
      background: var(--surface-card);
      border-radius: var(--border-radius-lg);
      padding: 2rem;
      width: 100%;
      max-width: 400px;
      box-shadow: var(--neon-shadow);
      border: 1px solid rgba(0, 255, 159, 0.1);

      h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--primary-color);
        font-family: 'Orbitron', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
      }

      input {
        width: 100%;
        padding: 0.75rem 1rem;
        background: var(--surface-alt);
        border: 1px solid var(--primary-color);
        border-radius: var(--border-radius-sm);
        color: var(--text-color);
        font-family: 'Rajdhani', sans-serif;
        transition: all 0.2s;

        &:focus {
          outline: none;
          box-shadow: var(--neon-shadow);
        }

        &::placeholder {
          color: var(--text-disabled);
        }
      }
    }

    .error-message {
      color: var(--error-color);
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .form-actions {
      margin-top: 2rem;
    }

    .btn-register {
      width: 100%;
      padding: 0.75rem;
      background: var(--primary-color);
      color: var(--surface-color);
      border: none;
      border-radius: var(--border-radius-sm);
      font-family: 'Orbitron', sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: var(--neon-shadow);

      &:hover:not(:disabled) {
        background: var(--primary-dark);
        box-shadow: var(--neon-glow);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .login-prompt {
      margin-top: 2rem;
      text-align: center;
      border-top: 1px solid rgba(0, 255, 159, 0.1);
      padding-top: 2rem;

      p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }

      .btn-login {
        display: inline-block;
        padding: 0.75rem 2rem;
        background: transparent;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
        border-radius: var(--border-radius-sm);
        text-decoration: none;
        font-family: 'Orbitron', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.2s;

        &:hover {
          background: var(--surface-hover);
          box-shadow: var(--neon-shadow);
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
    private authService: AuthService
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
    if (this.registerForm.valid) {
      this.isLoading = true;
      const { username, email, password } = this.registerForm.value;
      
      this.authService.register(username, email, password).subscribe({
        next: () => {
          // Handle successful registration
          this.isLoading = false;
        },
        error: (error) => {
          // Handle registration error
          console.error('Registration failed:', error);
          this.isLoading = false;
        }
      });
    }
  }
}