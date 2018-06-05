import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProjectlistPage } from '../pages/projectlist/projectlist';
import { ProjectdetailPage } from '../pages/projectdetail/projectdetail';
import { InternshipsPage } from '../pages/internships/internships';
import { MyapplicationPage } from '../pages/myapplication/myapplication';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProjectlistPage,
    ProjectdetailPage,
    InternshipsPage,
    MyapplicationPage,
    PersonalinfoPage,EducationPage,ExperiencePage,SkillsPage,ProjectsPage,GigsfreelancerPage,FunfactPage,
    VolunteerexperiencePage,LeadershipPage,HobbiespassionPage,VideoresumePage,WeblinkPage,ProfilePage,SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProjectlistPage,
    ProjectdetailPage,
    InternshipsPage,
    MyapplicationPage,
    PersonalinfoPage,EducationPage,ExperiencePage,SkillsPage,ProjectsPage,GigsfreelancerPage,FunfactPage,
    VolunteerexperiencePage,LeadershipPage,HobbiespassionPage,VideoresumePage,WeblinkPage,ProfilePage,SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
