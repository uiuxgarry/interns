import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SkillsPage } from '../skills/skills';

/**
 * Generated class for the ExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

  submitexp() {
    this.navCtrl.push(SkillsPage);
  }
  
}
