import { Routes } from '@angular/router';

export const visualArtsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/visual-arts-home/visual-arts-home.component').then(m => m.VisualArtsHomeComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'artists',
    loadComponent: () => import('./pages/artists/artists.component').then(m => m.ArtistsComponent)
  }
];