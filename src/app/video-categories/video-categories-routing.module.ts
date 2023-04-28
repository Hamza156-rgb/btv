import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoCategoriesPage } from './video-categories.page';

const routes: Routes = [
  {
    path: '',
    component: VideoCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoCategoriesPageRoutingModule {}
