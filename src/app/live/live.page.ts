import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Broadcast(){
    this.navCtrl.navigateForward('broadcaster');
  }



}
