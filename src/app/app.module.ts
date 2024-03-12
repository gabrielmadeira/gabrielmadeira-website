import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { SkillsComponent } from './skills/skills.component';
// import { ScullyLibModule } from '@scullyio/ng-lib';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SkillsComponent,
    ServicesComponent,
    ResumeComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ScullyLibModule,
    MarkdownModule.forRoot({loader: HttpClient, sanitize: SecurityContext.NONE}),
    MarkdownModule.forChild()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
