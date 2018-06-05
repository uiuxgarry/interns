import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectdetailPage } from '../projectdetail/projectdetail';

/**
 * Generated class for the ProjectlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projectlist',
  templateUrl: 'projectlist.html',
})
export class ProjectlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectlistPage');
  }

  takeup(){
    this.navCtrl.push(ProjectdetailPage);
  }

}
