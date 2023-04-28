import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formData={
    name:'',
    email:'',
    password:'',
    date:'',
    mobilenumber:'',
    country:'',
    username:''
  }

  confirmpassword:'';
  constructor(public navCtrl:NavController,public config:ConfigService,public shared:SharedDataService,public loading:LoadingService) { }

  ngOnInit() {
  }

  submit(){
    this.loading.show();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.formData.name == '' || this.formData.name == null || this.formData.name == undefined) {
      // this.sharedData.toast("Email is missing!");
      this.loading.hide();
      this.shared.toast('Name is missing!')
      //this.presentToast('Email is missing!');
      return;
    }
    if (this.formData.email == '' || this.formData.email == null || this.formData.email == undefined) {
      // this.sharedData.toast("Email is missing!");
      this.loading.hide();
      this.shared.toast('Email is missing!')
      //this.presentToast('Email is missing!');
      return;
    }
    


    if (!re.test(this.formData.email)) {
      this.loading.hide();
      // this.sharedData.toast("Email format is incorrect");
      this.shared.toast('Incorrect Email format')
      // this.presentToast('Email format is incorrect')
      return;
    }
    if (this.formData.password == '' || this.formData.password == null || this.formData.password == undefined) {
      this.loading.hide();
      this.shared.toast('Password is missing!')
      // this.presentToast("Password is missing!");
      return;

    }
    if(this.confirmpassword == '' || this.confirmpassword == null || this.confirmpassword == undefined){
      this.loading.hide();
      this.shared.toast('Confirm Password is missing!')
      // this.presentToast("Password is missing!");
      return;
    }
    if(this.formData.password != this.confirmpassword){
      this.loading.hide();
      this.shared.toast('Password doesnot match!')
      // this.presentToast("Password is missing!");
      return;
    }
    if(this.formData.country == '' || this.formData.country == null || this.formData.country == undefined){
      this.loading.hide();
      this.shared.toast('Country is missing!')
      // this.presentToast("Password is missing!");
      return;
    }
    if(this.formData.date == '' || this.formData.date == null || this.formData.date == undefined){
      this.loading.hide();
      this.shared.toast('DOB is missing!')
      // this.presentToast("Password is missing!");
      return;
    }
    if(this.formData.mobilenumber == '' || this.formData.mobilenumber == null || this.formData.mobilenumber == undefined){
      this.loading.hide();
      this.shared.toast('Mobile Number is missing!')
      // this.presentToast("Password is missing!");
      return;
    }
    
  
else{
  this.loading.hide();
    this.formData.username = this.formData.email.substr(0, this.formData.email.indexOf('@')); 
    console.log(this.formData.username)
    console.log(this.formData);
    this.config.postHttp('processRegistration',this.formData).then((data:any)=>{
      if(data.success == 0){
        this.shared.toast(data.message);
      }
      else
      if(data.success == 1){
        this.shared.toast(data.message);
        this.shared.login(data.data[0],this.formData.password);
      }
    })
  }
  }
  navTOSignIn(){
   
    this.navCtrl.navigateRoot('home');
  }
}
