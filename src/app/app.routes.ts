import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Legal } from './pages/legal/legal';
import { NotFound } from './pages/not-found/not-found';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: 'impressum', component: Legal },
  { path: '**', component: NotFound },
];
