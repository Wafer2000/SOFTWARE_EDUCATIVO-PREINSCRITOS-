import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SendemailComponent } from './login/sendemail/sendemail.component';



@NgModule({
  declarations: [
    LoginComponent,
    SendemailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ]
})
export class PagesModule { }
