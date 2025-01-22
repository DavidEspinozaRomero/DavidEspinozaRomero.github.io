import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SmokeTextComponent,
  BgAnimatedInteractiveComponent,
  CardProperties,
  CardsStackComponent,
} from 'src/app/components';
import { ImgComponent } from 'src/app/components/img/img.component';
import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SmokeTextComponent,
    BgAnimatedInteractiveComponent,
    CardsStackComponent,
    ImgComponent,
    WorkExperienceComponent,
    AboutMeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //#region Variables
  cards: CardProperties[] = [
    {
      title: 'TravelToSpace',
      href: 'https://travelto-space.netlify.app/',
      date: '08-2024 / 10-2024',
      author: 'David Espinoza Romero',
      prefix: 'Frontend Developer',
      photo: './../../../assets/photos/david_e.jpg',
      badges: [
        'Es6',
        'Typescript',
        'Astro',
        'Static Site Generator',
        'Scss',
        'Desing Sistem',
      ],
    },
    {
      title: 'SpaceshipsMO (hobby)',
      href: 'https://spacemo.netlify.app',
      date: '03-2024 / present',
      author: 'David Espinoza Romero',
      prefix: 'Full Stack Game Developer',
      photo: './../../../assets/photos/david_e.jpg',
      badges: [
        'Es6',
        'Typescript',
        'Rxjs',
        'Angular',
        'Node.js',
        'Express',
        'socket.io',
      ],
    },
    {
      title: 'Endless Runner Dog Game',
      href: 'https://endlessrunnerdog.netlify.app',
      date: '02-2024 / 03-2024',
      author: 'David Espinoza Romero',
      prefix: 'Game Developer',
      photo: './../../../assets/photos/david_e.jpg',
      badges: ['Es6', 'Typescript', 'Rxjs', 'Angular'],
    },
    {
      title: 'IVI Educa',
      href: 'https://ivieduca.com',
      date: '08-2021 / 12-2022',
      author: 'Vinary Technology',
      prefix: 'TI Company',
      photo: './../../../assets/photos/ivieduca.png',
      badges: [
        'Es6',
        'Typescript',
        'Rxjs',
        'Bootstrap',
        'Ngx-Bootstrap',
        'Chart.js',
        'Angular',
      ],
    },
    {
      title: 'WhatsApp Bot',
      href: 'https://wwbot.netlify.app',
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
        'Testing-Library',
        'Postgress',
        'TypeORM',
        'Nest.js',
      ],
    },
    {
      title: "Lilia's Bordados",
      href: 'https://liliasbordados.netlify.app',
      date: '03-2023 / 04-2023',
      author: 'Lilia Artheaga',
      prefix: 'Modista',
      photo: '',
      badges: ['Es6', 'Bootstrap', 'Sass', 'Angular'],
    },
  ];

  workExperience = [
    {
      title: 'Full Stack',
      company: 'Black Label Tech',
      site: 'Ambato, Ec',
      date: '2023 - 2024',
      description:
        'Soporte a software financiero de diferentes instituciones. (.Net Framework | Windows Forms | SQL | LINQ | MySQL | Microsoft Report Builder | SQL Server Reporting Services)',
      tasksList: [
        'Desarrollo y mantenimiento de funcionalidades en el sistema',
        'Realizar reportes de estados financieros e informes.',
        'Subir al servidor los reportes realizados',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Vinary Technology',
      site: 'Ambato, Ec',
      date: '2021 - 2022',
      description:
        'Creación de un SGA (Sistema de Gestión Administrativa) para instituciones educativas. (Angular | Bootstrap)',
      tasksList: [
        'Mejora en la seguridad de la aplicación implementando autorización/autenticación,  con guards y jwt.',
        'El proyecto no tenía estructura, Mejora en la estructura del proyecto basado en módulos (Globales/Locales).',
        'Refactorización de código (Módulos, Pipes, Directivas, Servicios, Componentes), para que sean reutilizables en todo el proyecto.',
      ],
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
      title: 'Experiencia',
      description:
        'Desarrollador frontend +3, he trabajado en el desarrollo de software y he adquirido una amplia experiencia en una variedad de lenguajes y tecnologías de programación. Tengo un sólido conocimiento en desarrollo de aplicaciones web, con experiencia en Es6+, Typescript, Rxjs, Angular, Unit Testing, Node, Express, Nestjs, SQL, Postgres.',
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
}
