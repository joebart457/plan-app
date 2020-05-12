import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.menuItems.push({label:'', icon: 'pi pi-list', routerLink: ['/tag-list']});
    this.menuItems.push({label:'', icon: 'pi pi-plus', routerLink: ['/plan']});
    this.menuItems.push({label:'', icon: 'pi pi-compass', routerLink: ['/objective']});
  }

}
