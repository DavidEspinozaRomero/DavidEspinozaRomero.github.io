import { Component, OnInit } from '@angular/core';
interface menuItem {
  text: string;
  routerLink: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: menuItem[] = [
    {text: 'Home', routerLink: './' },
    {text: 'Contacto', routerLink: './contact' },
    {text: 'Proyectos', routerLink: './projects' },
    {text: 'Nosotros', routerLink: './about-us' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
