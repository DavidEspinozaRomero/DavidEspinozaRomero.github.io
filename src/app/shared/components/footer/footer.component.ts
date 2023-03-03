import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ContactFormComponent } from 'src/app/components';
import { AppService } from 'src/app/services/app.service';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule, ContactFormComponent],
})
export class FooterComponent implements OnInit {
  //#region Variables
  hideContactForm = true;
  //#endregion Variables

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.hideContactForm.subscribe({
      next: (data: boolean) => {
        this.hideContactForm = data;
      },
    });
  }
}

//#region Interfaces

//#endregion Interfaces
