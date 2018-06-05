import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternshipsPage } from './internships';

@NgModule({
  declarations: [
    InternshipsPage,
  ],
  imports: [
    IonicPageModule.forChild(InternshipsPage),
  ],
})
export class InternshipsPageModule {}
