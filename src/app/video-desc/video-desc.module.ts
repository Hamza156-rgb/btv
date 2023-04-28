import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDescPageRoutingModule } from './video-desc-routing.module';

import { VideoDescPage } from './video-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoDescPageRoutingModule
  ],
  declarations: [VideoDescPage]
})
export class VideoDescPageModule {}
