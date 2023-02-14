import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    { label: 'Home', routerLink: '/' },
    { label: 'Contacto', routerLink: '/contact' },
    { label: 'Proyectos', routerLink: '/projects' },
    { label: 'Nosotros', routerLink: '/about-us' },
  ];
  //#endregion Variables
}

//#region Interfaces
interface menuItem {
  label: string;
  routerLink: string;
}
//#endregion Interfaces
