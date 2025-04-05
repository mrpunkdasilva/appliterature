import { Routes } from '@angular/router';

export const artistRoutes: Routes = [
  {
    path: 'profile/:username',
    loadComponent: () => import('./pages/artist-profile/artist-profile.component')
      .then(m => m.ArtistProfileComponent)
  },
  {
    path: 'portfolio/:username',
    loadComponent: () => import('./pages/artist-portfolio/artist-portfolio.component')
      .then(m => m.ArtistPortfolioComponent)
  },
  {
    path: 'store/:username',
    loadComponent: () => import('./pages/artist-store/artist-store.component')
      .then(m => m.ArtistStoreComponent)
  },
  {
    path: 'commissions/:username',
    loadComponent: () => import('./pages/artist-commissions/artist-commissions.component')
      .then(m => m.ArtistCommissionsComponent)
  }
];