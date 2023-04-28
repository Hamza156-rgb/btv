import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-video-categories',
  templateUrl: './video-categories.page.html',
  styleUrls: ['./video-categories.page.scss'],
})
export class VideoCategoriesPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 5,
    loop: true,
    centeredSlides:false,
    spaceBetween: 5
  };
  videos:any;
  videosCategories:any;
  constructor(private router: Router,public navCtrl:NavController,public config:ConfigService,public shared:SharedDataService) {
    this.getVideos();
   }

  ngOnInit() {
  }

  uploadVideo(){
  //  this.navCtrl.navigateForward('videoupload');
 this.navCtrl.navigateForward('tabs/video-desc');
  }
  videoStream(){
    this.navCtrl.navigateForward('tabs/videostream');
  }

  getVideos(){
    this.config.getHttp('getVideosCategories','').then((data:any)=>{
    this.videosCategories = data.data;
    this.getCategoryVideos(this.videosCategories[0].category_id)
    })
  }

  getCategoryVideos(id){
    console.log(id)
    this.videos = [];
    this.config.getHttp('getVideosByCategories?id='+id,'').then((data:any)=>{
      console.log(data);
      this.videos = data.data;
      })
  }
  goToVideo(video){
    let navigationExtras: NavigationExtras = {
      state: {
        video:JSON.stringify(video),
      }
    };
    this.router.navigate(['tabs/videostream'], navigationExtras);

  }
}
