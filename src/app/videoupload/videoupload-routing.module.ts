import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideouploadPage } from './videoupload.page';

const routes: Routes = [
  {
    path: '',
    component: VideouploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideouploadPageRoutingModule {}
