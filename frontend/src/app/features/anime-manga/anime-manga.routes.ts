import { Routes } from '@angular/router';

export const animeMangaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/anime-manga-home/anime-manga-home.component').then(m => m.AnimeMangaHomeComponent)
  },
  {
    path: 'anime',
    loadComponent: () => import('./pages/anime/anime.component').then(m => m.AnimeComponent)
  },
  {
    path: 'manga',
    loadComponent: () => import('./pages/manga/manga.component').then(m => m.MangaComponent)
  }
];