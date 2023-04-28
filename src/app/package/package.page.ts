import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
