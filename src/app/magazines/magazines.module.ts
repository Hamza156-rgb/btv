import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazinesPageRoutingModule } from './magazines-routing.module';

import { MagazinesPage } from './magazines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazinesPageRoutingModule
  ],
  declarations: [MagazinesPage]
})
export class MagazinesPageModule {}
