import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersProvider } from '../../providers/auth/auth';
declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  public smses: any;
  constructor(public navCtrl: NavController, public userProvider: UsersProvider) {
    this.loadSMS();
  }

  loadSMS(){
    if(window.SMS){
        window.SMS.listSMS({}, data => {
          setTimeout(() => {
              console.log(data);
              this.smses = data;
          }, 0)

      },error => {
        console.log(error);
      });
    }
  }


}
