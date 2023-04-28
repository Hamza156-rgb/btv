import { Component, OnInit , ViewChild} from '@angular/core';

import { IonRange, NavController } from '@ionic/angular';

import { DatePipe } from '@angular/common';
import { Howl } from 'howler';
export interface Track {
  name: string,
  path: string,
  episode:string
}

@Component({
  selector: 'app-playmusic3',
  templateUrl: './playmusic3.page.html',
  styleUrls: ['./playmusic3.page.scss'],
})
export class Playmusic3Page implements OnInit {
  @ViewChild('range', {static:false}) range:IonRange;
  playlist: Track[] = [{
    name: 'Autumn',
    path: './assets/mp3/autumn.mp3',
    episode:'Episode-147'
  },
  {
    name: 'Summer',
    path: './assets/mp3/summer.mp3',
    episode:'Episode-148'
  },
  {
    name: 'Winter',
    path: './assets/mp3/winter.mp3',
    episode:'Episode-149'
  }
  ];

  
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  duration:any;
  dur:any;
  seek1:any;
  constructor(private datePipe: DatePipe,public navCtrl:NavController) {
    this.activeTrack = null;
   
 
 
  }

  

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.player){
      console.log('Fire1');
      this.player.stop();
    }
    
    // this.videoplayer.nativeElement.stop();
  }

  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5:true,
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
        this.duration = this.player.duration();
          
        this.updateProgress();
      },
      onend: () => {

      }
    });
    this.player.play();
  }


  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    }
    else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    }
    else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  seek() {
   let newValue = +this.range.value;
  
   this.duration = this.player.duration();
   
   this.player.seek(this.duration * (newValue /100) );
  }
  updateProgress() {
   let seek = this.player.seek();
   
  this.seek1 = Math.round(seek);
   this.progress = this.seek1;
  
  
   setTimeout(()=>{
     this.updateProgress();

   },1000)
  }

  CancelAuto(){
    this.activeTrack = null;
    this.player.pause();
  }

  GOplaylist(){
    if(this.player){
    this.player.stop();
    }
    this.navCtrl.navigateForward('playmusic2');
  }
}
