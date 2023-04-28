import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.page.html',
  styleUrls: ['./search-music.page.scss'],
})
export class SearchMusicPage implements OnInit {

  
  
  PROGRESSIVE:boolean=false;
  RNB:boolean=false;
  HIPHOP:boolean=false;

  NUDISCO:boolean=false;
  EDM:boolean=true;
  ROCK:boolean = false;
  BIGROOM:boolean= false;
  POP:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  Trend(id:any){
    if(id == 1){
      this.NUDISCO = true;
      this.EDM = false;
      this.ROCK = false;
      this.BIGROOM = false;
      this.POP = false;
 
    }
    else if(id == 2){
      this.NUDISCO = false;
      this.EDM = true;
      this.ROCK = false;
      this.BIGROOM = false;
      this.POP = false;
 
   }
   else if(id == 3){
    this.NUDISCO = false;
    this.EDM = false;
    this.ROCK = true;
    this.BIGROOM = false;
    this.POP = false;
 
   }
   else if(id == 4){
    this.NUDISCO = false;
    this.EDM = false;
    this.ROCK = false;
    this.BIGROOM = true;
    this.POP = false;
 
   }
   else if(id == 5){
    this.NUDISCO = false;
    this.EDM = false;
    this.ROCK = false;
    this.BIGROOM = false;
    this.POP = true;
 
   }
  }
  Recent(id:any){

    if(id == 1){
      
      this.PROGRESSIVE = true;
      this.RNB = false;
      this.HIPHOP = false;
 
    }
    else if(id == 2){
      this.PROGRESSIVE = false;
      this.RNB = true;
      this.HIPHOP = false;
 
   }
   else if(id == 3){
    this.PROGRESSIVE = false;
    this.RNB = false;
    this.HIPHOP = true;
 
   }
  
  }
}
