import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'playmusic',
    loadChildren: () => import('./playmusic/playmusic.module').then( m => m.PlaymusicPageModule)
  },
  {
    path: 'playmusic2',
    loadChildren: () => import('./playmusic2/playmusic2.module').then( m => m.Playmusic2PageModule)
  },
  {
    path: 'playmusic3',
    loadChildren: () => import('./playmusic3/playmusic3.module').then( m => m.Playmusic3PageModule)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'broadcaster',
    loadChildren: () => import('./broadcaster/broadcaster.module').then( m => m.BroadcasterPageModule)
  },
  {
    path: 'videoupload',
    loadChildren: () => import('./videoupload/videoupload.module').then( m => m.VideouploadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
