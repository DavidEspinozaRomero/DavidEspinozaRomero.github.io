import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProps } from '../../services.component';

@Component({
  selector: 'app-service-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-icons.component.html',
  styleUrls: ['./service-icons.component.scss'],
})
export class ServiceIconsComponent {
  @Input() service?: ServiceProps;
}
