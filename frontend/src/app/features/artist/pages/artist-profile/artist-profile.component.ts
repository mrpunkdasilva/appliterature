import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="artist-profile">
      <div class="profile-header">
        <div class="cover-image">
          <!-- Cover Image Background -->
        </div>
        <div class="profile-info">
          <div class="avatar">
            <img src="assets/default-avatar.png" alt="Artist Avatar">
            <div class="verification-badge" *ngIf="isVerified">✓</div>
          </div>
          <div class="basic-info">
            <h1>{{ artistName }}</h1>
            <p class="username">{{'@' + username}}</p>
            <div class="tags">
              <span class="tag" *ngFor="let tag of artistTags">{{ tag }}</span>
            </div>
          </div>
          <div class="action-buttons">
            <button class="btn-commission">Solicitar Comissão</button>
            <button class="btn-follow">Seguir</button>
          </div>
        </div>
      </div>

      <div class="profile-content">
        <section class="stats-section">
          <div class="stat-card">
            <h3>Projetos Concluídos</h3>
            <p class="stat-number">{{ stats.completedProjects }}</p>
          </div>
          <div class="stat-card">
            <h3>Avaliação Média</h3>
            <p class="stat-number">{{ stats.averageRating }}/5</p>
          </div>
          <div class="stat-card">
            <h3>Seguidores</h3>
            <p class="stat-number">{{ stats.followers }}</p>
          </div>
        </section>

        <section class="featured-works">
          <h2>Trabalhos em Destaque</h2>
          <div class="works-grid">
            <!-- Featured Works Grid -->
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .artist-profile {
      background: var(--surface-color);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
    }

    .profile-header {
      position: relative;
      color: var(--text-color);
    }

    .profile-info {
      padding: 2rem;
    }

    .avatar {
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .verification-badge {
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: #4CAF50;
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .basic-info {
      margin-bottom: 2rem;
    }

    .username {
      color: var(--text-secondary);
      margin: 0.5rem 0;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tag {
      background: var(--surface-variant);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn-commission,
    .btn-follow {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      font-weight: 500;
    }

    .btn-commission {
      background: var(--primary-color);
      color: white;
    }

    .btn-follow {
      background: var(--surface-variant);
      color: var(--text-color);
    }

    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 2rem;
    }

    .stat-card {
      background: var(--surface-variant);
      padding: 1.5rem;
      border-radius: 1rem;
      text-align: center;
    }

    .stat-number {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 0.5rem;
    }

    .featured-works {
      padding: 2rem;
    }

    .works-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 1rem;
    }
  `]
})
export class ArtistProfileComponent implements OnInit {
  artistName = 'Nome do Artista';
  username = 'username';
  isVerified = true;
  artistTags = ['Ilustração Digital', 'Concept Art', 'Character Design'];

  stats = {
    completedProjects: 127,
    averageRating: 4.8,
    followers: 1420
  };

  ngOnInit() {
    // Aqui virá a lógica para carregar os dados do artista
  }
}
