import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyapplicationPage } from './myapplication';

@NgModule({
  declarations: [
    MyapplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(MyapplicationPage),
  ],
})
export class MyapplicationPageModule {}
