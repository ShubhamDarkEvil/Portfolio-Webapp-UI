import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { Location} from '@angular/common'




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public _router: Router, public _location:Location) { 

    
  }

  ngOnInit(): void {
  }


  toHome(){
    document.getElementById("landing")?.scrollIntoView({behavior:"smooth", block:"start"});
    // ,{skipLocationChange:true}).then() => {
    //   this._router.navigateByUrl((this._location.path()));
    
  }
  onclickReload()
  {
    window.location.reload();
  }

  
  toResume(){
    // this._router.navigateByUrl("/resume");
    
    document.getElementById("resume")?.scrollIntoView({behavior:"smooth", block:"center"});
    
  }
  
  toProject(){
  
    document.getElementById("project")?.scrollIntoView({behavior:"smooth"});
  }
  
  toContact(){

    document.getElementById("contact")?.scrollIntoView({behavior:"smooth", block:"end"});
  }

  public onToggleSidenav = () => {

      this.sidenavToggle.emit();
  }

}
