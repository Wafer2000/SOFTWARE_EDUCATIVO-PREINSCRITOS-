import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SendemailComponent } from './pages/login/sendemail/sendemail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sendemail', component: SendemailComponent},
  {path: 'exainscrip', loadChildren: () => import('./pages/exainscrip/exainscrip.module')
  .then( m => m.ExainscripPageModule)},
  {path: 'recucontra', loadChildren: () => import('./pages/login/recucontra/recucontra.module')
  .then( m => m.RecucontraPageModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

