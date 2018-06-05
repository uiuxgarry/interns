import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HobbiespassionPage } from '../hobbiespassion/hobbiespassion';

/**
 * Generated class for the LeadershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leadership',
  templateUrl: 'leadership.html',
})
export class LeadershipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadershipPage');
  }

  submithobbies(){
    this.navCtrl.push(HobbiespassionPage);
  }
}
