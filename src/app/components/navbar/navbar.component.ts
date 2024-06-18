import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(){}


  public homeClick(){
    if (window.screenY !== 0) {
      window.scrollTo(0,0);
    } else {
      location.reload();
    }
  }
}
