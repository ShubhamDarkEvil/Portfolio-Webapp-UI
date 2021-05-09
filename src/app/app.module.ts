import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
// import { ParticlesModule } from 'angular-particle';
// import {NgParticlesModule} from "ng-particles";

// import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HomeComponent } from './components/home/home.component';
import ScrollSnap from 'scroll-snap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    FullpageComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    LandingComponent,
    HomeComponent
    
    
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
    
    // AngularFullpageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
