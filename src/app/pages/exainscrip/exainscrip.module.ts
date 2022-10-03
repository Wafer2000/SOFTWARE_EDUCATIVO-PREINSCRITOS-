import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExainscripPageRoutingModule } from './exainscrip-routing.module';

import { ExainscripPage } from './exainscrip.page';
import { OpexamComponent } from 'src/app/components/opexam/opexam.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExainscripPageRoutingModule
  ],
  declarations: [ExainscripPage, OpexamComponent]
})
export class ExainscripPageModule {}
