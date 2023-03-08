import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eyes-follow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eyes-follow.component.html',
  styleUrls: ['./eyes-follow.component.scss'],
})
export class EyesFollowComponent {
  #mouseMove = document!
    .querySelector('body')!
    .addEventListener('mousemove', this.#eyeball);

  #eyeball(event: any) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = radian * (180 / Math.PI) * -1 + 270;
      (eye as HTMLDivElement).style.transform = `rotate(${rotation}deg)`;
    });
  }
}
