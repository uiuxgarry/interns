import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProjectlistPage } from '../projectlist/projectlist';
import { InternshipsPage } from '../internships/internships';
import { ProjectdetailPage } from '../projectdetail/projectdetail';
import { ProfilePage } from '../profile/profile';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  browseProjects(){
    this.navCtrl.push(InternshipsPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
  
  register(){
    this.navCtrl.push(RegisterPage);
  }

}
