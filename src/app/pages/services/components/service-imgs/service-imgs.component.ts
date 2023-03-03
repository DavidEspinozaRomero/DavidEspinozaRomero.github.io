import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProps } from '../../services.component';

@Component({
  selector: 'app-service-imgs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-imgs.component.html',
  styleUrls: ['./service-imgs.component.scss'],
})
export class ServiceImgsComponent {
  @Input() service?: ServiceProps;
}
