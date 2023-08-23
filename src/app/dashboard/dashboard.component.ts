import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/authentication/login.service';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Mes annonces',  icon: '', class: '' },
  { path: '/offres', title: 'Mes offres',  icon:'', class: '' },
  { path: '/achats', title: 'Mes achats',  icon:'', class: '' },
  { path: '/infos', title: 'Mes infos',  icon:'', class: '' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public menuItems!: any[];
  public isCollapsed = true;
  user:any;
  constructor(private router: Router,private loginService:LoginService) { }
  ngOnInit() {
    this.user = this.loginService.getUserData();
    console.log(this.user);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
