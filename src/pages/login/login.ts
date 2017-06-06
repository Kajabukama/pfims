import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";

import { UsersProvider } from "../../providers/auth/auth";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public status: any;
  public loader: any;

  constructor(
    public navCtrl: NavController,
    public userProvider: UsersProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  login(user){
    this.presentLoading();
    this.userProvider.authenticate(user)
    .then((data) => {
      this.status = data;
      if(this.status){
        this.loader.dismiss();
        this.navCtrl.push(TabsPage,{user:user});
      } else {
        user.email = "";
        this.loader.dismiss();
        this.presentToast('Account does not exist!');

      }
    })

  }


  signup(){
    this.navCtrl.push(RegisterPage);
  }

  presentToast(sms) {
    let toast = this.toastCtrl.create({
      message: sms,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
      duration: 5000
    });
    this.loader.present();
  }

}
