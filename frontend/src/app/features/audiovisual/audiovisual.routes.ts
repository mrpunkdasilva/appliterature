import { Routes } from '@angular/router';

export const audiovisualRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/audiovisual-home/audiovisual-home.component').then(m => m.AudiovisualHomeComponent)
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent)
  },
  {
    path: 'films',
    loadComponent: () => import('./pages/films/films.component').then(m => m.FilmsComponent)
  }
];