import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss'],
  imports: [CommonModule],
})
export class PathNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
