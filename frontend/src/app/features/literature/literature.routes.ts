import { Routes } from '@angular/router';

export const literatureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/literature-home/literature-home.component').then(m => m.LiteratureHomeComponent)
  },
  {
    path: 'poems',
    loadComponent: () => import('./pages/poems/poems.component').then(m => m.PoemsComponent)
  },
  {
    path: 'stories',
    loadComponent: () => import('./pages/stories/stories.component').then(m => m.StoriesComponent)
  }
];