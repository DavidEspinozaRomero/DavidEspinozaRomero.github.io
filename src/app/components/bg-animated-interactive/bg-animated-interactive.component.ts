import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bg-animated-interactive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bg-animated-interactive.component.html',
  styleUrls: ['./bg-animated-interactive.component.scss']
})
export class BgAnimatedInteractiveComponent {

  bgCubes = Array(16*12)
}
