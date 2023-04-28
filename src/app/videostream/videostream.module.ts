import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideostreamPageRoutingModule } from './videostream-routing.module';

import { VideostreamPage } from './videostream.page';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    VideostreamPageRoutingModule
  ],
  declarations: [VideostreamPage]
})
export class VideostreamPageModule {}
