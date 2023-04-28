import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'explore',
        loadChildren: () => import('../explore/explore.module').then( m => m.ExplorePageModule)
      },
      {
        path: 'video-categories',
        loadChildren: () => import('../video-categories/video-categories.module').then( m => m.VideoCategoriesPageModule)
      },
      {
        path: 'video-desc',
        loadChildren: () => import('../video-desc/video-desc.module').then( m => m.VideoDescPageModule)
      },
      {
        path: 'package',
        loadChildren: () => import('../package/package.module').then( m => m.PackagePageModule)
      },
      {
        path: 'videostream',
        loadChildren: () => import('../videostream/videostream.module').then( m => m.VideostreamPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path: 'radio',
        loadChildren: () => import('../radio/radio.module').then( m => m.RadioPageModule)
      },
      {
        path: 'magazines',
        loadChildren: () => import('../magazines/magazines.module').then( m => m.MagazinesPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('../store/store.module').then( m => m.StorePageModule)
      },
      {
        path: 'podcasts',
        loadChildren: () => import('../podcasts/podcasts.module').then( m => m.PodcastsPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
     
      {
        path: 'search-music',
        loadChildren: () => import('../search-music/search-music.module').then( m => m.SearchMusicPageModule)
      },
      {
        path: 'live',
        loadChildren: () => import('../live/live.module').then( m => m.LivePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class TabsPageRoutingModule {}
