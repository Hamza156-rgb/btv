import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(public config:ConfigService) {
    this.getCategories();
   }
  
  categories:any;
  ngOnInit() {
  }

  getCategories(){
    this.config.getHttp('getCategories','').then((data:any)=>{
    this.categories = data.data;
    console.log('http:localhost/btvglobalAdmin/'+this.categories[0].cat_picture)
    })
  }
}
