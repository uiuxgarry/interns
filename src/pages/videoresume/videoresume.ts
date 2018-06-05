import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';
import { WeblinkPage } from '../weblink/weblink';

/**
 * Generated class for the VideoresumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videoresume',
  templateUrl: 'videoresume.html',
})
export class VideoresumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoresumePage');
  }

  submitweblink(){
    this.navCtrl.push(WeblinkPage);
  }

}
