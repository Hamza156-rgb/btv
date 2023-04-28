import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.page.html',
  styleUrls: ['./podcasts.page.scss'],
})
export class PodcastsPage implements OnInit {

  EDM:boolean=false;
  ROCK:boolean = false;
  PROGRESSIVE:boolean=false;
  RNB:boolean=false;
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Edm(id:any){
   if(id == 1){
     this.EDM = true;
     this.ROCK = false;
     this.PROGRESSIVE = false;
     this.RNB = false;

   }
   else if(id == 2){
    this.EDM = false;
    this.ROCK = true;
    this.PROGRESSIVE = false;
    this.RNB = false;

  }
  else if(id == 3){
    this.EDM = false;
    this.ROCK = false;
    this.PROGRESSIVE = true;
    this.RNB = false;

  }
  else if(id == 4){
    this.EDM = false;
    this.ROCK = false;
    this.PROGRESSIVE = false;
    this.RNB = true

  }
  }

playmusic(){
this.navCtrl.navigateForward('playmusic');
}

more(){
  this.navCtrl.navigateForward('tabs/search-music');
  }
  
}
