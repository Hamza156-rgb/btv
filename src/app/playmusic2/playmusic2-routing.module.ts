import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Playmusic2Page } from './playmusic2.page';

const routes: Routes = [
  {
    path: '',
    component: Playmusic2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Playmusic2PageRoutingModule {}
