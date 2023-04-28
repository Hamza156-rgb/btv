
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Md5 } from 'ts-md5/dist/md5';

import { AppEventsService } from 'src/providers/app-events/app-events.service';

if (localStorage.langId == undefined) {

  localStorage.langId = '1';//default language id
  localStorage.languageCode = "en"; //default language code
  localStorage.direction = "ltr"; //default language direction of app
  localStorage.currency = "$";  //default currecny html code to show in app.
  // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/
  localStorage.currencyCode = "USD";  //default currency code
  localStorage.currencyPos = "left";  //default currency position
  localStorage.decimals = 2;  //default currecny decimal
  localStorage.tabsNavigation = true;  //default currecny decimal
}

@Injectable()

export class ConfigService {

  
  //public yourSiteUrl: string = 'https://goldadder.com';
  public yourSiteUrl: string = 'http://btvglobal.codetreck.com';
  public consumerKey: string = "dadb7a7c1557917902724bbbf5";
  public consumerSecret: string = "3ba77f821557917902b1d57373";

  public showIntroPage = 1; //  0 to hide and 1 to show intro page
  public appInProduction = true;//  0 to hide and 1 to show intro page
  public defaultIcons = true; //  0 to hide and 1 to show intro page

  public appNavigationTabs = localStorage.tabsNavigation; //  true for tabs layout and false for sidemenu layout
  public appTheme = 'default';
  public darkMode = false;

  public bannerAnimationEffect = "default";// fade, coverFlow, flip, cube, default
  public bannerStyle = "default"; // default, squareBullets, numberBullets, bottomBulletsWhiteBackground, progressBar, verticalRightBullets, verticalLeftBullets
  public productCardStyle = "1"


  public productSlidesPerPage = 2.5;

 
  public url: string = this.yourSiteUrl + '/';
  public imgUrl: string = this.yourSiteUrl + "/";
  public langId: string = localStorage.langId;
  public currecnyCode: string = localStorage.currencyCode;
  public loader = 'dots';
  public newProductDuration = 10;
  public cartButton = 1;//1 = show and 0 = hide
  public currency = localStorage.currency;
  public currencyPos = localStorage.currencyPos;
  public paypalCurrencySymbol = localStorage.currency;
  public address;
  public fbId;
  public email;
  public latitude;
  public longitude;
  public phoneNo;
  public pushNotificationSenderId;
  public lazyLoadingGif;
  public notifText;
  public notifTitle;
  public notifDuration;
  public footerShowHide;
  public homePage = 1;
  public categoryPage = 1;
  public siteUrl = '';
  public appName = '';
  public packgeName = "";
  public introPage = 1;
  public myOrdersPage = 1;
  public newsPage = 1;
  public wishListPage = 1;
  public shippingAddressPage = 1;
  public aboutUsPage = 1;
  public contactUsPage = 1;
  public editProfilePage = 1;
  public settingPage = 1;
  public admob = 1;
  public admobBannerid = '';
  public admobIntid = '';
  public admobIos = 1;
  public admobBanneridIos = '';
  public admobIntidIos = '';
  public googleAnalaytics = "";
  public rateApp = 1;
  public shareApp = 1;
  public fbButton = 1;
  public googleButton = 1;
  public notificationType = "";
  public onesignalAppId = "";
  public onesignalSenderId = "";
  public appSettings: { [k: string]: any } = {};
  public currentRoute = "home";
  constructor(
    public storage: Storage,
    public platform: Platform,
    public md5: Md5,
    public http: HttpClient,
    public appEventsService: AppEventsService,
 
  ) {
    
  }
  getHttp(req,data) {
    let d = new Date();
    const httpOptions = {
      headers: new HttpHeaders({
        'consumer-key': this.consumerKey,
        'consumer-secret': this.consumerSecret,
        'consumer-nonce': d.getTime().toString(),
        'consumer-device-id': 'device id of the app',
        'consumer-ip': '192.168.1.11',
      })
    };
    const nativeHeaders = {
      'consumer-key': this.consumerKey,
      'consumer-secret': this.consumerSecret,
      'consumer-nonce': d.getTime().toString(),
      'consumer-device-id': 'device id of the app',
      'consumer-ip': '192.168.1.11',
      'Content-Type': 'application/json',
    };

    return new Promise(resolve => {

        this.http.get(this.url + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          console.log("Error : " + req);
          console.log(err);
        });
   
    });
  }

  postHttp(req, data) {
    let d = new Date();
    const httpOptions = {
      headers: new HttpHeaders({
        'consumer-key': this.consumerKey,
        'consumer-secret': this.consumerSecret,
        'consumer-nonce': d.getTime().toString(),
        'consumer-device-id': 'device id of the app',
        'consumer-ip': '192.168.1.11',
      })
    };
    const nativeHeaders = {
      'Content-Type': 'application/json',
      'consumer-key': this.consumerKey,
      'consumer-secret': this.consumerSecret,
      'consumer-nonce': d.getTime().toString(),
      'consumer-device-id': 'device id of the app',
      'consumer-ip': '192.168.1.11',
    };

    return new Promise(resolve => {

        this.http.post(this.url + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          console.log("Error : " + req);
          console.log(err);
        });
    });
  }
  public siteSetting() {
    // return new Promise(resolve => {
    //   this.storage.get('appSettings').then((val) => {
    //     if (val == null) {
    //       this.getSettingsFromServer().then((data: any) => {
    //         if (data.success == "1") {
    //           this.appSettings = data.data;
    //           this.storage.set("appSettings", this.appSettings);
    //           this.defaultSettings();
    //           this.appEventsService.publish('settingsLoaded', "");
    //         }
    //         resolve();
    //       });
    //     }
    //     else {
    //       this.appSettings = val;
    //       this.defaultSettings();
    //       this.appEventsService.publish('settingsLoaded', "");
    //       resolve();
    //     }
    //   });
    // });
  }
  
}