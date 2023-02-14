import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  s3Items = [
    {
      number: '1',
      title: 'Find',
      description:
        'We will find clients in your area looking for your business services through our targeted marketing systems.',
    },
    {
      number: '2',
      title: 'Connect',
      description:
        'We will connect them real time to your business through multiple means.',
    },
    {
      number: '3',
      title: 'Grow',
      description:
        'We will grow your business by supporting your ever expanding customer base and helping you manage your business growth.',
    },
  ];

  workMethods = [
    {
      icon: 'bi bi-calendar-check',
      title: 'Experience',
      description:
        "I' ve been working in software development for years, and have gained extensive experience in a variety of programming languages and technologies. I have a solid knowledge in the development of web applications, mobile applications, database management systems, among others.",
    },
    {
      icon: 'bi bi-gear',
      title: 'Problem Solving',
      description:
        'I am comfortable working on complex problems and solving them effectively. I have gained skills to quickly identify problem areas as well as find creative and effective solutions.',
    },
    {
      icon: 'bi bi-people',
      title: 'Teamwork',
      description:
        'I am a team player and enjoy working collaboratively with other developers, designers, and clients to ensure project goals are achieved. I am comfortable working in agile environments and using methodologies such as Scrum or Kanban.',
    },
    {
      icon: 'bi bi-wechat',
      title: 'Effective Communication',
      description:
        'I am committed to effective communication and transparency. I make sure to maintain clear communication with my teammates and clients, to make sure that everyone is aware of the progress of the project and that the agreed objectives are met.',
    },
  ];
}
