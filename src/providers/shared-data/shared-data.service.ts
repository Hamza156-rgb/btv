
import { Injectable, ApplicationRef, NgZone } from '@angular/core';
import { ConfigService } from '../config/config.service';

import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';
import { Platform, ToastController, AlertController } from '@ionic/angular';



import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedDataService {

  authenticationState = new BehaviorSubject(false);
  public banners = [];
  public tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public flashSaleProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public allCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public categories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public subCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public customerData: { [k: string]: any } = {};
  public designID = 36;
  public recentViewedProducts = new Array();
  public cartProducts = new Array();
  public privacyPolicy = "";
  public termServices = "";
  public refundPolicy = "";
  public aboutUs = "";
  public cartquantity = 0;
  public wishList = new Array();
  public tempdata: { [k: string]: any } = {};
  public dir = "ltr";
  public selectedFooterPage = "HomePage";
  public currentOpenedModel: any = null;
  public applieddesign = new Array;
  public orderDetails = {
    guest_status: 0,
    email: "",
    tax_zone_id: "",
    delivery_firstname: "",
    delivery_lastname: "",
    delivery_state: "",
    delivery_city: "",
    delivery_postcode: "",
    delivery_zone: "",
    delivery_country: "",
    delivery_country_id: "",
    delivery_street_address: "",
    delivery_country_code: "",
    delivery_phone: "",

    billing_firstname: "",
    billing_lastname: "",
    billing_state: "",
    billing_city: "",
    billing_postcode: "",
    billing_zone: "",
    billing_country: "",
    billing_country_id: "",
    billing_street_address: "",
    billing_country_code: "",
    billing_phone: "",
    total_tax: '',
    shipping_cost: '',
    shipping_method: '',
    payment_method: '',
    comments: ''
  };
  public translationListArray = [];
  public singleProductPageData = [];
  public singlePostData: any;
  myOrderDetialPageData: any;
  lab = false;
  public missingValues = [];
  primaryHexColor = "#3980ff";
  constructor(
    public config: ConfigService,
    public httpClient: HttpClient,
    public storage: Storage,
    public loading: LoadingService,
   
    public platform: Platform,
    public alertCtrl: AlertController,

    private toastCtrl: ToastController,
    
    
    public router:Router,
  ) {
    // setTimeout(() => {
    //   this.lab = true;
    // }, 10000);
    // this.platform.ready().then(() => {

    // });

    // let settingsLoaded = this.appEventsService.subscribe("settingsLoaded");
    // settingsLoaded.subscriptions.add(settingsLoaded.event.subscribe(data => {
    //   this.onStart();
    // }));

    //getting recent viewed items from local storage
    this.storage.create();
    this.storage.get('customerData').then((val:any) => {
      
      
      if (val != null || val != undefined) {
        this.customerData = val;
        console.log(this.customerData)
       
        if(Object.keys(this.customerData).length !=0){
          this.authenticationState.next(true);
        }
        else{
          this.authenticationState.next(false);
        }
        
        
         
      }
      else{
        this.authenticationState.next(false);
      }
     
    }
    );
    // storage.get('appliedDesign').then((val) => {
    //   if (val != null || val != undefined) this.applieddesign = val;
     
      
  
    // });
    //getting recent viewed items from local storage
    // storage.get('recentViewedProducts').then((val) => {
    //   if (val != null) this.recentViewedProducts = val;
    // });
    // if (this.platform.is('cordova')) {
    // }
    //getting recent viewed items from local storage
    // storage.get('cartProducts').then((val) => {
    //   if (val != null) this.cartProducts = val;
    //   this.cartTotalItems();
    //   // console.log(val);
    // });


    //---------------- end -----------------


  }
  // public splashScreenHide = false;
  // hideSplashScreen() {
  //   if (this.platform.is('cordova')) {
  //     if (!this.splashScreenHide) { this.splashScreen.hide(); this.splashScreenHide = true; }
  //   }
  // }
  onStart() {
    //getting all banners
    // this.config.getHttp('getbanners').then((data: any) => {
    //   this.banners = data.data;
    // });
    //getting tab 1
    // let data: { [k: string]: any } = {};
    // if (this.customerData.customers_id != null)
    //   data.customers_id = this.customerData.customers_id;
    // data.page_number = 0;
    // data.language_id = this.config.langId;
    // data.currency_code = this.config.currecnyCode;

    // data.type = 'flashsale';
    // this.config.postHttp('getallproducts', data).then((data: any) => {
    //   this.flashSaleProducts = data.product_data
    // });
    // data.type = 'top seller';
    // this.config.postHttp('getallproducts', data).then((data: any) => {
    //   this.tab1 = data.product_data
    // });
    //getting tab 2
    // data.type = 'special';
    // this.config.postHttp('getallproducts', data).then((data: any) => {
    //   this.tab2 = data.product_data
    // });
    //getting tab 3
    // data.type = 'most liked';
    // this.config.postHttp('getallproducts', data).then((data: any) => {
    //   this.tab3 = data.product_data
    // });
    //getting all allCategories
    // this.config.postHttp('allcategories', data).then((data: any) => {
    //   if (this.allCategories[0] == 1) {
    //     this.allCategories = [];
    //     this.categories = [];
    //     this.subCategories = [];
    //   }
    //   for (let value of data.data) {

    //     value.id = value.categories_id;
    //     value.name = value.categories_name;

    //     this.allCategories.push(value);

    //     if (value.parent_id == 0)
    //       this.categories.push(value);
    //     else
    //       this.subCategories.push(value);
    //   }
    // });

    //getting allpages from the server
    // this.config.postHttp('getallpages', { language_id: this.config.langId, currency_code: this.config.currecnyCode }).then((data: any) => {
    //   if (data.success == 1) {
    //     let pages = data.pages_data;
    //     for (let value of pages) {
    //       if (value.slug == 'privacy-policy') this.privacyPolicy = value.description;
    //       if (value.slug == 'term-services') this.termServices = value.description;
    //       if (value.slug == 'refund-policy') this.refundPolicy = value.description;
    //       if (value.slug == 'about-us') this.aboutUs = value.description;
    //     }
    //   }
    // });
  }
  //adding into recent array products
 

  login(data,password:any) {
   
  
   
    this.customerData =data;
    
    this.customerData.user_id = data.user_id;
    this.customerData.name = data.name;
    this.customerData.email = data.email;
    this.customerData.country = data.country;
    this.customerData.mobilenumber = data.mobilenumber;
    this.customerData.username = data.username;
    this.customerData.password = password;
     
    this.customerData.date = data.date;

    this.customerData.date = this.customerData.date.substr(0, this.customerData.date.indexOf('T'));
    
    
   
   
    this.storage.set('customerData', this.customerData);
    console.log(this.customerData.user_id)
    this.authenticationState.next(true);
  }
  logOut() {
    this.loading.autoHide(500);
    this.customerData = {};
    
    this.storage.set('customerData', this.customerData);
    
  // this.admob.ShowBanner();
    console.log(this.customerData);
    // this.fb.logout();
    this.authenticationState.next(false);
  }
 


  showAd() {
    //this.loading.autoHide(2000);
    //this.appEventsService.publish('showAd', "");
  }

  toast(msg) {
    console.log(msg);
    this.translateString(msg).then(async (res: string) => {
      const toast = await this.toastCtrl.create({
        message: res,
        duration: 3500,
        position: 'bottom',
     
      });
      toast.present();
    });
  }
  toastMiddle(msg) {

    this.translateString(msg).then(async (res: string) => {
      let toast = await this.toastCtrl.create({
        message: res,
        duration: 3500,
        position: 'middle'
      });

      toast.present();
    });
  }

  toastWithCloseButton(msg) {

    this.translateString(msg).then(async (res: string) => {
      let toast = await this.toastCtrl.create({
        message: res,
        keyboardClose: true,
        position: 'middle',
        //text: "X"
      });
      toast.present();
    });
  }


  //categories page

  getCategoriesPageItems(parent) {
    let c = [];
    if (parent == undefined)
      c = this.categories;
    else {
      for (let v of this.allCategories) {
        if (v.parent == parent) {
          c.push(v);
        }
      }
    }
    return c;
  }

  // translation services
  translateString(value) {
    return new Promise(resolve => {
      let v = this.translationListArray[value];
      console.log(v);
      if (v == undefined) {
        this.missingValues[value] = value;
        v = value;
      }
      resolve(v);
    });
  }
  translateArray(value) {
    return new Promise(resolve => {
      let tempArray = [];
      value.forEach(element => {
        if (this.translationListArray[element] != undefined) {
          tempArray[element] = this.translationListArray[element];

        }
        else {
          tempArray[element] = element;
          this.missingValues[value] = value;
        }
      });
      resolve(tempArray);
    });
  }
  //=================================================

  showAlert(text) {
    this.translateArray([text, "ok", "Alert"]).then(async (res) => {
      console.log(res);
      const alert = await this.alertCtrl.create({
        header: res["Alert"],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }

  showAlertWithTitle(text, title) {
    this.translateArray([text, "ok", title]).then(async (res) => {
      let alert = await this.alertCtrl.create({
        header: res[title],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }

  getNameFirstLetter() {
    return this.customerData.firstName.charAt(0);
  }

  getNameFirstLetters(){
    let nam:string = this.customerData.customers_firstname
    let nam1:string = this.customerData.customers_lastname;
    let nam2:string = nam.charAt(0);
    let nam3:string = nam1.charAt(0);
    let nam4:string = nam2 + nam3;
   
    let namPicture = nam4.toString();
    return namPicture;
  }

  getProductRatingPercentage(rating: any) {
    let val = (parseFloat(rating) * 100) / 5;
    return val + '%'
  }

}
