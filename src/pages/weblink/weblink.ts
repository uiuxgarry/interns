import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';

/**
 * Generated class for the WeblinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weblink',
  templateUrl: 'weblink.html',
})
export class WeblinkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeblinkPage');
  }

  submitdetails(){
    this.navCtrl.push(ProjectlistPage);
  }

}
