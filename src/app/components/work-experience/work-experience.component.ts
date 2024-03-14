import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperience } from 'src/app/pages/home/models/work-experience.model';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  @Input() workExperience!: WorkExperience[];
}
