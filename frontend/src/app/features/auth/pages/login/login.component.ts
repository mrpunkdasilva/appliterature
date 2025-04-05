import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h1>Login</h1>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              placeholder="your@email.com"
            >
            <div class="error-message" *ngIf="loginForm.get('email')?.errors?.['required'] && loginForm.get('email')?.touched">
              Email is required
            </div>
            <div class="error-message" *ngIf="loginForm.get('email')?.errors?.['email'] && loginForm.get('email')?.touched">
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
            <div class="error-message" *ngIf="loginForm.get('password')?.errors?.['required'] && loginForm.get('password')?.touched">
              Password is required
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-login" [disabled]="loginForm.invalid || isLoading">
              {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
            <a class="forgot-password" routerLink="/auth/reset-password">Forgot password?</a>
          </div>
        </form>

        <div class="register-prompt">
          <p>Don't have an account?</p>
          <a routerLink="/auth/register" class="btn-register">Create account</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100vh - 200px);
      padding: 2rem;
    }

    .login-card {
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
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }

    .btn-login {
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

    .forgot-password {
      text-align: center;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      transition: all 0.2s;

      &:hover {
        color: var(--primary-color);
      }
    }

    .register-prompt {
      margin-top: 2rem;
      text-align: center;
      border-top: 1px solid rgba(0, 255, 159, 0.1);
      padding-top: 2rem;

      p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }

      .btn-register {
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
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: () => {
          // Handle successful login
          this.isLoading = false;
        },
        error: (error) => {
          // Handle login error
          console.error('Login failed:', error);
          this.isLoading = false;
        }
      });
    }
  }
}
