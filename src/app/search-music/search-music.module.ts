import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMusicPageRoutingModule } from './search-music-routing.module';

import { SearchMusicPage } from './search-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMusicPageRoutingModule
  ],
  declarations: [SearchMusicPage]
})
export class SearchMusicPageModule {}
