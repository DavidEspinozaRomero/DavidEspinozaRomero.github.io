import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from 'src/app/components';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule, ContactFormComponent],
})
export class FooterComponent implements OnInit {
  //#region Variables

  //#endregion Variables
  constructor() {}

  ngOnInit(): void {}
}

//#region Interfaces

//#endregion Interfaces
