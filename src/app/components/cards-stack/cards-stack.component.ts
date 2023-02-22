import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-stack.component.html',
  styleUrls: ['./cards-stack.component.scss'],
})
export class CardsStackComponent {
  @Input() cards: CardProperties[] = [];
}

export interface CardProperties {
  title: string;
  date: string;
  author: string;
  prefix: string;
  photo: string;
  badges: string[];
}