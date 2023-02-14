import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [RouterModule],
})
export class MenuComponent implements OnInit {
  //#region Variables
  menuItems: menuItem[] = [
    { text: 'Home', routerLink: '/' },
    { text: 'Contacto', routerLink: '/contact' },
    { text: 'Proyectos', routerLink: '/projects' },
    { text: 'Nosotros', routerLink: '/about-us' },
  ];
  //#endregion Variables
  constructor() {}

  ngOnInit(): void {}
}

//#region Interfaces
interface menuItem {
  text: string;
  routerLink: string;
}
//#endregion Interfaces
