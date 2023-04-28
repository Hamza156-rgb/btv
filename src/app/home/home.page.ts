import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formData={
    username:'',
    password:''
  }
   myCustomIcon = "/assets/icon/facebook.svg";
   myCustomIcon2 = "/assets/icon/instagram.svg";
   myCustomIcon3 = "/assets/icon/twitter.svg";
   myCustomIcon4 = "/assets/icon/gmail.svg";


   isLoggedIn = false;
users = { id: '', name: '', email: '', picture: { data: { url: '' } } };


userData: any = {};


  constructor(public navCtrl:NavController,
    public config:ConfigService,
    public shared:SharedDataService,
    public loading:LoadingService,
    private fb: Facebook,
    private googlePlus: GooglePlus) {

      fb.getLoginStatus()
  .then(res => {
    console.log(res.status);
    if (res.status === 'connect') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  })
  .catch(e => console.log(e));
    }


  login(){
  //   this.loading.show();
  //   if (this.formData.username == '' || this.formData.username == null || this.formData.username == undefined) {
  //     // this.sharedData.toast("Email is missing!");
  //     this.loading.hide();
  //     this.shared.toast('Username is missing!')
  //     //this.presentToast('Email is missing!');
  //     return;
  //   }
    

  //   if (this.formData.password == '' || this.formData.password == null || this.formData.password == undefined) {
  //     this.loading.hide();
  //     this.shared.toast('Password is missing!')
  //     // this.presentToast("Password is missing!");
  //     return;

  //   }
  //   else{

  //     this.loading.hide();
  //   this.config.postHttp('processLogin',this.formData).then((data:any)=>{
  //     if(data.success == 0){
  //       this.shared.toast(data.message);
  //     }
  //     else
  //     if(data.success == 1){
  //       this.shared.toast(data.message);
  //       this.shared.login(data.data[0],this.formData.password);
  //     }
  //   })
  // }
   this.navCtrl.navigateForward('tabs/explore');
  }

  navTOSignup(){
    this.loading.autoHide(2000);
    this.navCtrl.navigateRoot('signup');
  }


  async FBlogin() {

   
      this.fb.login(['public_profile', 'email'])
        .then(res => {
          if (res.status === 'connected') {
            this.isLoggedIn = true;
            this.getUserDetail(res.authResponse.userID);
          } else {
            this.isLoggedIn = false;
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
    
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
       
        this.users = res;
        console.log(this.users);
            this.shared.login(this.users,this.formData.password);

         
      })
      .catch(e => {
        this.shared.toast(e)
      });
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }


  googleSignIn() {
    this.googlePlus.login({})
      .then((result:any)=>{
        this.userData = result
        this.shared.login(this.userData,this.formData.password);
      }  )
      .catch((err:any) =>{
        console.log(err);
      } )
  }
}
