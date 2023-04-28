import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public shared:SharedDataService,public navCtrl:NavController) {
    this.initializeApp()
  }

  
  initializeApp() {
   
    //  this.statusBar.styleDefault();
     
      
      this.shared.authenticationState.subscribe(state => {
        // if (state) {
            console.log("user is logged in");
            this.navCtrl.navigateRoot(['tabs/explore']);
           // this.splashScreen.hide();
        // } else {
        //     console.log("user is NOT logged in");
        //     this.navCtrl.navigateRoot('home');
        //   //  this.splashScreen.hide();
        // }
    });
  
  }

}
