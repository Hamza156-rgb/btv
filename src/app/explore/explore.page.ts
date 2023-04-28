import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  navToVideoCat(){

    this.navCtrl.navigateForward('tabs/video-categories');
  }

  navToMovies(){
    this.navCtrl.navigateForward('tabs/movies');
  }

  navToRadio(){
    this.navCtrl.navigateForward('tabs/radio');
  }
  navToStore(){
    this.navCtrl.navigateForward('tabs/store');
  }
  navToPodcasts(){
    this.navCtrl.navigateForward('tabs/podcasts');
  }
  navToNews(){
    this.navCtrl.navigateForward('tabs/news');
  }
}
