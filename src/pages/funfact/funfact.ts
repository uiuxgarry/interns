import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VolunteerexperiencePage } from '../volunteerexperience/volunteerexperience';

/**
 * Generated class for the FunfactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funfact',
  templateUrl: 'funfact.html',
})
export class FunfactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FunfactPage');
  }

  submitvolunteerexp(){
    this.navCtrl.push(VolunteerexperiencePage);
  }

}
