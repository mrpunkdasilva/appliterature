import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-store',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="store-container">
      <h2>Loja</h2>
      <div class="products-grid">
        <!-- Store content will go here -->
      </div>
    </div>
  `,
  styles: [`
    .store-container {
      padding: 2rem;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  `]
})
export class ArtistStoreComponent {}