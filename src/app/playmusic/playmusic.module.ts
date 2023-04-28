import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaymusicPageRoutingModule } from './playmusic-routing.module';

import { PlaymusicPage } from './playmusic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaymusicPageRoutingModule
  ],
  declarations: [PlaymusicPage]
})
export class PlaymusicPageModule {}
