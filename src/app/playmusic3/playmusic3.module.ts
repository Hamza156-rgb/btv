import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Playmusic3PageRoutingModule } from './playmusic3-routing.module';

import { Playmusic3Page } from './playmusic3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Playmusic3PageRoutingModule
  ],
  declarations: [Playmusic3Page]
})
export class Playmusic3PageModule {}
