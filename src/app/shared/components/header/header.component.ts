import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutingRootPaths } from 'src/app/models/rootpaths.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  //#region Variables
  menuItems: menuItem[] = [
    {
      label: 'Home',
      icon: 'bi bi-house-door-fill',
      routerLink: RoutingRootPaths.home,
    },
    {
      label: 'Contact',
      icon: 'bi bi-chat-fill',
      routerLink: RoutingRootPaths.contact,
    },
    {
      label: 'Projects',
      icon: 'bi bi-folder-fill',
      routerLink: RoutingRootPaths.projects,
    },
    {
      label: 'Services',
      icon: 'bi bi-person-fill-gear',
      routerLink: RoutingRootPaths.services,
    },
    // { label: 'About me', icon: 'bi bi-person-fill', routerLink: RoutingRootPaths.aboutUs },
  ];
  //#endregion Variables
}

//#region Interfaces
interface menuItem {
  label: string;
  icon: string;
  routerLink: string;
}
//#endregion Interfaces
