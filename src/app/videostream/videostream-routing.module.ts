import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideostreamPage } from './videostream.page';

const routes: Routes = [
  {
    path: '',
    component: VideostreamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideostreamPageRoutingModule {}
