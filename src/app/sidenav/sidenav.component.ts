import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  activeLink = 'Mes annonces'; // Default active link

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
