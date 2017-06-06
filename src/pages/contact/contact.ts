import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UsersProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public userProvider: UsersProvider) {

  }
  ionViewDidLoad(){
    this.userProvider.findAll();
  }

}
