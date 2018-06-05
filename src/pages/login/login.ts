import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderPage } from '../slider/slider';
import { ProjectlistPage } from '../projectlist/projectlist';
import { RegisterPage } from '../register/register';
import { InternshipsPage } from '../internships/internships';
import { MyapplicationPage } from '../myapplication/myapplication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
  login() {
    this.navCtrl.push(ProjectlistPage);
  }
  /*interns(){
    this.navCtrl.push(InternshipsPage);
  }*/
  interns(){
    this.navCtrl.push(MyapplicationPage);
  }

}
