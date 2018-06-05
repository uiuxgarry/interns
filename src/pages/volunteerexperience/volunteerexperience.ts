import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeadershipPage } from '../leadership/leadership';

/**
 * Generated class for the VolunteerexperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volunteerexperience',
  templateUrl: 'volunteerexperience.html',
})
export class VolunteerexperiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolunteerexperiencePage');
  }

  submitleadership(){
    this.navCtrl.push(LeadershipPage);
  }

}
