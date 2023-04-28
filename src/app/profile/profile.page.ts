import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  formData={
    name:this.shared.customerData.name,
    date:this.shared.customerData.date,
    email:this.shared.customerData.email,
    country:this.shared.customerData.country,
    mobilenumber:this.shared.customerData.mobilenumber,
    password:this.shared.customerData.password
  }
  constructor(public shared:SharedDataService) { }

  ngOnInit() {
  }

  logout(){
    this.shared.logOut();
  }

}
