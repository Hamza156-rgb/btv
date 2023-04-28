import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';


const APPLICATION_ID:string = 'vgIkZTBvqGDTbTV0vIfaww';
@Component({
  selector: 'app-broadcaster',
  templateUrl: './broadcaster.page.html',
  styleUrls: ['./broadcaster.page.scss'],
})
export class BroadcasterPage implements OnInit {

  isBroadcasting = false;
  isPending = false;
  broadcaster: any;
  errListenerId = false;
  constructor(private toastCtrl: ToastController, public platform: Platform) {
    platform.ready().then(() => {
      // Using array syntax workaround, since types are not declared.
      if (window['bambuser']) {
        this.broadcaster = window['bambuser']['broadcaster'];
        this.broadcaster.setApplicationId(APPLICATION_ID);
      } else {
        // Cordova plugin not installed or running in a web browser
      }
    });
   }

  ngOnInit() {
  }


  async ionViewDidLoad() {
    console.log('Starting viewfinder');
  
    if (!this.broadcaster) {

      return new Promise(function(resolve ,reject) {

        if(resolve){
          alert('broadcaster is not ready yet');
          return;
        }
       else {
        
       }

        });
            //   await new Promise(resolve => setTimeout(resolve, 500)); // Let page animations to finish
    //   alert('broadcaster is not ready yet');
    //   return;
   }
  
    this.broadcaster.showViewfinderBehindWebView();
    document.getElementsByTagName('body')[0].classList.add("show-viewfinder");
  

}
  
  ionViewWillLeave() {
    console.log('Removing viewfinder');
    document.getElementsByTagName('body')[0].classList.remove("show-viewfinder");
    if (this.broadcaster) {
      this.broadcaster.hideViewfinder();
    }
  }

  async  start() {
  if (this.isBroadcasting || this.isPending) return;
  this.isPending = true;
  const toast = await this.toastCtrl.create({
    message: 'Starting broadcast...',
    position: 'middle',
    duration: 2000,
  });
 toast.present();

  console.log('Starting broadcast');
  this.broadcaster.startBroadcast();
   console.log(this.broadcaster);
 
  this.isBroadcasting = true;
  this.isPending = false;
}
async stop() {
  if (!this.isBroadcasting || this.isPending) return;
  this.isPending = true;
  const toast = await this.toastCtrl.create({
    message: 'Ending broadcast...',
    position: 'middle',
    duration: 2000,
  });
  toast.present();

  console.log('Ending broadcast');
   this.broadcaster.stopBroadcast();

  
  this.isBroadcasting = false;
  this.isPending = false;
}
}
