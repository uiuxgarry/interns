import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExperiencePage } from '../experience/experience';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

  submitedu(){
    this.navCtrl.push(ExperiencePage);
  }

}
