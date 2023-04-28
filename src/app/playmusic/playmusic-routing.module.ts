import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaymusicPage } from './playmusic.page';

const routes: Routes = [
  {
    path: '',
    component: PlaymusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaymusicPageRoutingModule {}
