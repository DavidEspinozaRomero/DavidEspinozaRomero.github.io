import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smoke-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smoke-text.component.html',
  styleUrls: ['./smoke-text.component.scss'],
})
export class SmokeTextComponent implements OnChanges {
  @Input() paragraph: string = '';
  letters = this.paragraph.split('');

  smokeTextEfect(letter: HTMLSpanElement) {
    if (letter.classList.contains('smoke-text--active')) return;
    letter.classList.add('smoke-text--active');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.letters = this.paragraph.split('');
  }
}
