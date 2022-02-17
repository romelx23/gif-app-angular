import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gif-app';
  toggle=false;
  //toggle mode dark
  toggleMode(){
    this.toggle=!this.toggle;
  }
}
