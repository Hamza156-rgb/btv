import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { DatePipe } from '@angular/common';
import { Md5 } from 'ts-md5/dist/md5';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

import { ConfigService } from 'src/providers/config/config.service';
import { HttpClientModule } from '@angular/common/http';

import { Facebook} from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),HttpClientModule],
  providers: [
    DatePipe,
    Md5,
    ConfigService,
    SharedDataService,
  Facebook,
  GooglePlus,

  Camera,
    File,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
