import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExainscripPage } from './exainscrip.page';

const routes: Routes = [
  {
    path: '',
    component: ExainscripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExainscripPageRoutingModule {}
