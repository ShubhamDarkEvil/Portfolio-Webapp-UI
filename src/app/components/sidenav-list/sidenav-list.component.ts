import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onSidenavCloseR = () =>{
    this.sidenavClose.emit();
    // document.getElementById("resume")?.scrollIntoView({behavior:"smooth"});
  }
  
  onSidenavCloseP = () =>{
    this.sidenavClose.emit();
    // document.getElementById("project")?.scrollIntoView({behavior:"smooth"});
  }
  
  onSidenavCloseC = () =>{
    this.sidenavClose.emit();
    // document.getElementById("contact")?.scrollIntoView({behavior:"smooth", block:"end"});
  }
  onSidenavCloseH = () =>{
    this.sidenavClose.emit();
    // document.getElementById("landing")?.scrollIntoView({behavior:"smooth", block:"end"});
  }


}
