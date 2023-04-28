import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDescPage } from './video-desc.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDescPageRoutingModule {}
