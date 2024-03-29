import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ContactFormComponent } from 'src/app/components';
import { EyesFollowComponent } from 'src/app/components/eyes-follow/eyes-follow.component';
import { AppService } from 'src/app/services/app.service';

import { HeaderComponent } from 'src/app/shared';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, EyesFollowComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.hideContactForm.emit(false);
  }
  ngOnDestroy(): void {
    this.appService.hideContactForm.emit(true);
  }
}
