import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literature-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="literature-home">
      <h1>Literatura</h1>
      <p>Explore nossa coleção de obras literárias</p>
      <!-- Adicione mais conteúdo conforme necessário -->
    </section>
  `,
  styles: [`
    .literature-home {
      padding: 2rem;
      
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.2rem;
        color: var(--text-secondary);
      }
    }
  `]
})
export class LiteratureHomeComponent {}