import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Playmusic3Page } from './playmusic3.page';

const routes: Routes = [
  {
    path: '',
    component: Playmusic3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Playmusic3PageRoutingModule {}
