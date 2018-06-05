import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunfactPage } from './funfact';

@NgModule({
  declarations: [
    FunfactPage,
  ],
  imports: [
    IonicPageModule.forChild(FunfactPage),
  ],
})
export class FunfactPageModule {}
