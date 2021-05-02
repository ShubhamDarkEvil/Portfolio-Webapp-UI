import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component' ;
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
const routes: Routes = [

  { path: 'home', component: LandingComponent},


   {path: '', redirectTo: 'home' , pathMatch: 'full'},
   { path: 'projects', component: ProjectsComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'resume', component: ResumeComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
