import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})

export class SkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  submitskills() {
    this.navCtrl.push(ProjectsPage);
  }
}
