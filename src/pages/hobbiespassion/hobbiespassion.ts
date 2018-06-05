import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoresumePage } from '../videoresume/videoresume';

/**
 * Generated class for the HobbiespassionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hobbiespassion',
  templateUrl: 'hobbiespassion.html',
})
export class HobbiespassionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HobbiespassionPage');
  }

  submitvideoresume(){
    this.navCtrl.push(VideoresumePage);
  }
}
