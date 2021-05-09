import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config'; 

declare let particlesJS: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

   
  constructor() {
   }

  ngOnInit(): void {
    this.invokeParticles();

  }
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
  
}
