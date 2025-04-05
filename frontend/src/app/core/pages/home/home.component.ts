import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="glitch-container">
        <h1 class="glitch" data-text="Delta Arts">Delta Arts</h1>
      </div>
      <p class="subtitle">Onde a Arte Encontra o Futuro</p>
      <div class="cyber-grid"></div>
    </section>

    <section class="featured-categories">
      <h2>Explore o Multiverso Digital</h2>
      <div class="categories-grid">
        <div class="category-card" routerLink="/literature">
          <div class="card-glow"></div>
          <h3>Literatura</h3>
          <p>Narrativas Digitais & Poesia Cibernética</p>
        </div>
        <div class="category-card" routerLink="/visual-arts">
          <div class="card-glow"></div>
          <h3>Artes Visuais</h3>
          <p>Arte Digital & Realidade Aumentada</p>
        </div>
        <div class="category-card" routerLink="/audiovisual">
          <div class="card-glow"></div>
          <h3>Audiovisual</h3>
          <p>Cinema Experimental & Motion Art</p>
        </div>
        <div class="category-card" routerLink="/anime-manga">
          <div class="card-glow"></div>
          <h3>Anime & Mangá</h3>
          <p>Neo-Tokyo Unleashed</p>
        </div>
      </div>
    </section>

    <section class="latest-content">
      <h2>Últimas Criações</h2>
      <div class="content-grid">
        <div class="content-card">
          <div class="card-header">
            <span class="tag">Literatura</span>
            <span class="date">Hoje</span>
          </div>
          <h3>O Último Código</h3>
          <p>Uma história sobre inteligência artificial e consciência humana</p>
        </div>
        <div class="content-card">
          <div class="card-header">
            <span class="tag">Arte Digital</span>
            <span class="date">Ontem</span>
          </div>
          <h3>Neon Dreams</h3>
          <p>Série de ilustrações sobre um futuro cyberpunk</p>
        </div>
        <div class="content-card">
          <div class="card-header">
            <span class="tag">Audiovisual</span>
            <span class="date">2 dias atrás</span>
          </div>
          <h3>Pulso Digital</h3>
          <p>Curta-metragem experimental sobre realidade virtual</p>
        </div>
      </div>
    </section>

    <section class="join-community">
      <h2>Entre na Matrix</h2>
      <p>Faça parte da revolução artística digital</p>
      <button class="cta-button">Iniciar Upload</button>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      background: var(--background-color);
    }

    .hero {
      position: relative;
      text-align: center;
      padding: 6rem 2rem;
      background: var(--surface-color);
      overflow: hidden;
      border-radius: 0 0 2rem 2rem;
      margin-bottom: 4rem;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, var(--primary-color) 0%, transparent 100%);
        opacity: 0.1;
      }

      .glitch-container {
        position: relative;
      }

      .glitch {
        font-size: 4rem;
        font-weight: 700;
        text-shadow:
          0 0 10px var(--primary-color),
          0 0 20px var(--primary-color),
          0 0 40px var(--primary-color);
        animation: glitch 1s infinite;
      }

      .subtitle {
        font-size: 1.5rem;
        color: var(--accent-color);
        margin-top: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }

    .featured-categories {
      padding: 4rem 2rem;
      max-width: 1400px;
      margin: 0 auto;

      h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: var(--primary-color);
      }

      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }

      .category-card {
        position: relative;
        padding: 2rem;
        background: var(--surface-card);
        border: 1px solid var(--primary-color);
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-accent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--neon-glow);

          &::before {
            opacity: 0.1;
          }
        }

        h3 {
          position: relative;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        p {
          position: relative;
          color: var(--text-secondary);
        }
      }
    }

    .latest-content {
      padding: 4rem 2rem;
      background: var(--surface-alt);
      max-width: 1400px;
      margin: 0 auto;

      h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: var(--primary-color);
      }

      .content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .content-card {
        background: var(--surface-card);
        border-radius: 1rem;
        padding: 1.5rem;
        border: 1px solid var(--primary-color);
        transition: all 0.3s;

        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--neon-glow);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;

          .tag {
            background: var(--primary-color);
            color: var(--surface-color);
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.875rem;
          }

          .date {
            color: var(--text-secondary);
            font-size: 0.875rem;
          }
        }

        h3 {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        p {
          color: var(--text-secondary);
        }
      }
    }

    .join-community {
      text-align: center;
      padding: 6rem 2rem;
      background: var(--surface-color);
      margin-top: 4rem;
      border-radius: 2rem 2rem 0 0;

      h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }

      .cta-button {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-family: 'Orbitron', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-radius: 4px;
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: var(--neon-shadow);

        &:hover {
          background: var(--primary-color);
          color: var(--surface-color);
          box-shadow: var(--neon-glow);
        }
      }
    }

    @keyframes glitch {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    }

    @media (max-width: 768px) {
      .hero .glitch {
        font-size: 3rem;
      }

      .hero .subtitle {
        font-size: 1.25rem;
      }
    }
  `]
})
export class HomeComponent {}
