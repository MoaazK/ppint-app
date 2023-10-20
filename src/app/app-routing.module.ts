import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'statistics', loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: 'downloads', loadChildren: () => import('./pages/downloads/downloads.module').then(m => m.DownloadsModule) },
  { path: 'tutorial', loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  // { path: '', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
