import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoCategoriesPageRoutingModule } from './video-categories-routing.module';

import { VideoCategoriesPage } from './video-categories.page';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoCategoriesPageRoutingModule,
    PipesModule,
  ],
  declarations: [VideoCategoriesPage]
})
export class VideoCategoriesPageModule {}
