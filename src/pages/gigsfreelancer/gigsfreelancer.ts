import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunfactPage } from '../funfact/funfact';

/**
 * Generated class for the GigsfreelancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gigsfreelancer',
  templateUrl: 'gigsfreelancer.html',
})
export class GigsfreelancerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GigsfreelancerPage');
  }

  submitfunfact() {
    this.navCtrl.push(FunfactPage);
  }

}
