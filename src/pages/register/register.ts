import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { LoginPage } from "../login/login";

import { UsersProvider } from "../../providers/auth/auth";
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  public status: any;
  public loader: any;

  constructor(
    public navCtrl: NavController,
    public userProvider: UsersProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  signup(user){
    this.presentLoading();
    this.userProvider.register(user)
    .then((data) => {
      this.status = data;
      if(this.status){
        this.loader.dismiss();
        this.navCtrl.push(LoginPage);
      } else {
        this.loader.dismiss();
        this.presentToast('Please fill all form fields');
      }
    })
  }

  presentToast(sms) {
    let toast = this.toastCtrl.create({
      message: sms,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Registering...",
      duration: 5000
    });
    this.loader.present();
  }

}
