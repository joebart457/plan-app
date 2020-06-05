import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public basicItems: MenuItem[] = [];
  public fullItems: MenuItem[] = [];
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.basicItems.push({label:'Plans', icon: 'pi pi-list', routerLink: ['/plan']});

    this.fullItems.push({label:'Plans', icon: 'pi pi-list', routerLink: ['/plan']});
    this.fullItems.push({label:'Tags', icon: 'pi pi-tags', routerLink: ['/tag-list']});
    this.fullItems.push({label:'Links', icon: 'pi pi-share-alt', routerLink: ['/tag-list']});
    this.fullItems.push({label:'Goals', icon: 'pi pi-map-marker', routerLink: ['/objective']});
    this.fullItems.push({label:'Test', icon: 'pi pi-chart-bar', routerLink: ['/analysis']});
    this.fullItems.push({label:'View', icon:'pi pi-calendar', routerLink:['/calendar']});
    this.fullItems.push({label:'Settings', icon: 'pi pi-cog', routerLink: ['/settings']});
  }

  getMenuItems(): MenuItem[] {
    if(this.sessionService.getCurrentPlan()) {
      return this.fullItems;
    }
    return this.basicItems;
  }

}
