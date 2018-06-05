import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SliderPage } from './slider';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@NgModule({
  declarations: [
    SliderPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderPage),
  ],
})

export class SliderPageModule {}
