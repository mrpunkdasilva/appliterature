import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <span class="logo-text" routerLink="/">Delta Literature & Arts</span>
        </div>

        <nav class="main-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/literature" routerLinkActive="active">Literatura</a>
          <a routerLink="/visual-arts" routerLinkActive="active">Artes Visuais</a>
          <a routerLink="/audiovisual" routerLinkActive="active">Audiovisual</a>
          <a routerLink="/anime-manga" routerLinkActive="active">Anime & Mangá</a>
        </nav>

        <div class="user-actions">
          <ng-container *ngIf="authService.currentUser$ | async as user; else loginButtons">
            <a class="btn btn-upload" routerLink="/artist/upload">Upload</a>
            <div class="user-menu">
              <img [src]="user.avatar || 'assets/default-avatar.png'" alt="Avatar" class="user-avatar">
              <div class="dropdown-menu">
                <a routerLink="/profile">Perfil</a>
                <a routerLink="/settings">Configurações</a>
                <button (click)="logout()">Sair</button>
              </div>
            </div>
          </ng-container>

          <ng-template #loginButtons>
            <a class="btn btn-upload" routerLink="/auth/login">Upload</a>
            <a class="btn btn-login" routerLink="/auth/login">Login</a>
          </ng-template>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: var(--surface-color);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .main-nav {
      display: flex;
      gap: 2rem;

      a {
        text-decoration: none;
        color: var(--text-color);
        padding: 0.5rem;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover, &.active {
          color: var(--primary-color);
          background: var(--surface-hover);
        }
      }
    }

    .user-actions {
      display: flex;
      gap: 1rem;
      align-items: center;

      .btn {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
      }

      .btn-upload {
        background: var(--primary-color);
        color: var(--surface-color);
        font-weight: 700;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

        &:hover {
          background: var(--primary-dark);
        }
      }

      .btn-login {
        background: transparent;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);

        &:hover {
          background: var(--surface-hover);
        }
      }
    }

    .user-menu {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;

      .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }

      .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--surface-color);
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 0.5rem;
        min-width: 150px;
        display: none;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 1000;

        a, button {
          width: 100%;
          text-align: left;
          padding: 0.5rem;
          color: var(--text-color);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: normal;

          &:hover {
            background: var(--surface-hover);
            color: var(--primary-color);
          }
        }
      }

      &:hover {
        .dropdown-menu {
          display: flex;
        }
      }
    }
  `]
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
