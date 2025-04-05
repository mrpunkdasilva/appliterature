import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="portfolio-container">
      <h2>Portfólio</h2>
      <div class="portfolio-grid">
        <!-- Portfolio content will go here -->
      </div>
    </div>
  `,
  styles: [`
    .portfolio-container {
      padding: 2rem;
    }
    
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  `]
})
export class ArtistPortfolioComponent {}