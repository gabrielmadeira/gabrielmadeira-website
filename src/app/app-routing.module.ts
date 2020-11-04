import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
