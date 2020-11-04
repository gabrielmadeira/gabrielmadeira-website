import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { SkillsComponent } from './skills/skills.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SkillsComponent,
    ServicesComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
