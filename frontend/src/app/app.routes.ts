import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'artist',
    loadChildren: () => import('./features/artist/artist.routes').then(m => m.artistRoutes)
  },
  {
    path: 'literature',
    loadChildren: () => import('./features/literature/literature.routes').then(m => m.literatureRoutes)
  },
  {
    path: 'visual-arts',
    loadChildren: () => import('./features/visual-arts/visual-arts.routes').then(m => m.visualArtsRoutes)
  },
  {
    path: 'audiovisual',
    loadChildren: () => import('./features/audiovisual/audiovisual.routes').then(m => m.audiovisualRoutes)
  },
  {
    path: 'anime-manga',
    loadChildren: () => import('./features/anime-manga/anime-manga.routes').then(m => m.animeMangaRoutes)
  },
  {
    path: 'about',
    loadComponent: () => import('./core/pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./core/pages/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./core/pages/privacy/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./core/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./core/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
