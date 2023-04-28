import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideouploadPageRoutingModule } from './videoupload-routing.module';

import { VideouploadPage } from './videoupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideouploadPageRoutingModule
  ],
  declarations: [VideouploadPage]
})
export class VideouploadPageModule {}
