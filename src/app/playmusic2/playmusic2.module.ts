import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Playmusic2PageRoutingModule } from './playmusic2-routing.module';

import { Playmusic2Page } from './playmusic2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Playmusic2PageRoutingModule
  ],
  declarations: [Playmusic2Page]
})
export class Playmusic2PageModule {}
