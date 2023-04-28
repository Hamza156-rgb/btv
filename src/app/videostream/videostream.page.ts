import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ConfigService } from 'src/providers/config/config.service';
@Component({
  selector: 'app-videostream',
  templateUrl: './videostream.page.html',
  styleUrls: ['./videostream.page.scss'],
})
export class VideostreamPage implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  video:any;
  constructor(public navCtrl: NavController,private route: ActivatedRoute, private router: Router,public config:ConfigService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.video = JSON.parse(this.router.getCurrentNavigation().extras.state.video);
        setTimeout(() => {
          this.config.postHttp('addView?video_id='+ this.video.video_id,'').then(x =>{

          })
        }, 10000);
      }
    });
  }




  ngOnInit() {
    
  }


 addLike(){
    this.config.postHttp('addLike?video_id='+ this.video.video_id,'')
      }

addDislike(){
  this.config.postHttp('addDislike?video_id='+ this.video.video_id,'')
}



  

  ngOnDestroy(){
    console.log('Fire1');
    // this.videoplayer.nativeElement.stop();
  }
}
