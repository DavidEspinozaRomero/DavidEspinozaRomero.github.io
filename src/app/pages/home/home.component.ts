import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SmokeTextComponent,
  BgAnimatedInteractiveComponent,
  CardProperties,
  CardsStackComponent,
} from 'src/app/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SmokeTextComponent,
    BgAnimatedInteractiveComponent,
    CardsStackComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //#region Variables
  cards: CardProperties[] = [
    {
      title: 'WhatsApp Bot',
      date: '06-2022 / 01-2023',
      author: 'David Espinoza Romero',
      prefix: 'Frontend Developer',
      photo: './../../../assets/photos/david_e.jpg',
      badges: [
        'Es6',
        'Typescript',
        'Rxjs',
        'Bootstrap',
        'Angular',
        'Jest',
        'Postgress',
        // 'Mailer',
        // 'Websocket',
        'Nest.js',
      ],
    },
    {
      title: "Lilia's Bordados",
      date: '03-2023 / 04-2023',
      author: 'Lilia Artheaga',
      prefix: 'Modista',
      photo: '',
      badges: ['Es6', 'Bootstrap', 'Sass', 'Angular'],
    },
    {
      title: 'title2',
      date: 'text2',
      author: 'name',
      prefix: 'lorem',
      photo: '',
      badges: ['Angular'],
    },
    {
      title: 'title2',
      date: 'text2',
      author: 'David',
      prefix: 'Programer',
      photo: '',
      badges: ['Angular'],
    },
    {
      title: 'title2',
      date: 'text2',
      author: 'David',
      prefix: 'Programer',
      photo: '',
      badges: ['Angular'],
    },
  ];

  path = [
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
      icon: 'bi bi-calendar-check iconRotateY',
      title: 'Experience',
      description:
        "I' ve been working in software development for years, and have gained extensive experience in a variety of programming languages and technologies. I have a solid knowledge in the development of web applications, mobile applications, database management systems, among others.",
    },
    {
      icon: 'bi bi-gear iconRotateY',
      title: 'Problem Solving',
      description:
        'I am comfortable working on complex problems and solving them effectively. I have gained skills to quickly identify problem areas as well as find creative and effective solutions.',
    },
    {
      icon: 'bi bi-people iconRotateY',
      title: 'Teamwork',
      description:
        'I am a team player and enjoy working collaboratively with other developers, designers, and clients to ensure project goals are achieved. I am comfortable working in agile environments and using methodologies such as Scrum or Kanban.',
    },
    {
      icon: 'bi bi-wechat iconRotateY',
      title: 'Effective Communication',
      description:
        'I am committed to effective communication and transparency. I make sure to maintain clear communication with my teammates and clients, to make sure that everyone is aware of the progress of the project and that the agreed objectives are met.',
    },
  ];

  xs = window.innerWidth > 576;
  //#endregion Variables

  ngOnInit(): void {
    console.log(this.xs);
  }
}
