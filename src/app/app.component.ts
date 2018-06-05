import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SliderPage } from '../pages/slider/slider';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { InternshipsPage } from '../pages/internships/internships';
import { MyapplicationPage } from '../pages/myapplication/myapplication';
import { ProjectlistPage } from '../pages/projectlist/projectlist';
import { ProjectdetailPage } from '../pages/projectdetail/projectdetail';
import { PersonalinfoPage } from '../pages/personalinfo/personalinfo';
import { EducationPage } from '../pages/education/education';
import { ExperiencePage } from '../pages/experience/experience';
import { SkillsPage } from '../pages/skills/skills';
import { ProjectsPage } from '../pages/projects/projects';
import { GigsfreelancerPage } from '../pages/gigsfreelancer/gigsfreelancer';
import { FunfactPage } from '../pages/funfact/funfact';
import { VolunteerexperiencePage } from '../pages/volunteerexperience/volunteerexperience';
import { LeadershipPage } from '../pages/leadership/leadership';
import { HobbiespassionPage } from '../pages/hobbiespassion/hobbiespassion';
import { VideoresumePage } from '../pages/videoresume/videoresume';
import { WeblinkPage } from '../pages/weblink/weblink';
import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:string = 'SliderPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

