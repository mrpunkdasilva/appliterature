import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-commissions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="commissions-container">
      <h2>Comissões</h2>
      <div class="commission-packages">
        <!-- Commissions content will go here -->
      </div>
    </div>
  `,
  styles: [`
    .commissions-container {
      padding: 2rem;
    }
    
    .commission-packages {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  `]
})
export class ArtistCommissionsComponent {}