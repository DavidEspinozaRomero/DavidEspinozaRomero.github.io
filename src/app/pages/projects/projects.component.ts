import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  //#region  Variables
  projects = [
    {
      title: 'IVI Educa',
      description: [
        'I have the opportunity to work with frontend technologies, agile methodologies, implement the required functionalities for the application, create the user interface, gain experience in teamwork and collaborate with other team members such as designers, project managers and others developers. This has allowed me to improve my effective communication skills and work in a dynamic and results-oriented environment.',
        'Its objective is to facilitate the management of students, professors, class schedules, record of grades, communication, calendar and payments in a single platform, which will allow the administrators of the institution to improve the efficiency and quality of the service they provide to their students and parents.',
      ],
      paragraphs: [
        {
          subtitle: 'Student Management',
          description:
            ' Allows institution administrators to register and manage student information, including names, ages, level, grades, and other relevant information.',
        },
        {
          subtitle: 'Faculty Management',
          description:
            'Allows the administrators of the institution to register and manage the information of the professors, including names, specialties, subjects and other relevant information.',
        },
        {
          subtitle: 'Class Schedule',
          description:
            'Allows the administrators of the institution to create and manage class schedules for each level, section and group of students.',
        },
        {
          subtitle: 'Grade Record',
          description:
            'Allows teachers to record student grades for each subject and period, which allows institution administrators to generate progress, graphics and promotion reports.',
        },
        {
          subtitle: 'Communication',
          description:
            'Allows students, parents, and teachers to communicate with each other through the app, for example, to send messages, announcements, and notifications.',
        },
        {
          subtitle: 'Calendar',
          description:
            'Allows students and parents to access a calendar of events of the institution, such as exam dates, school holidays and other important events.',
        },
        {
          subtitle: 'Payment Management',
          description:
            'Allows parents to make payments for tuition and other school fees directly through the app, and allows institution administrators to track payments and send receipts to parents.',
        },
      ],
      tech: [
        'Es6',
        'Typescript',
        'Rxjs',
        'Bootstrap',
        'Ngx-Bootstrap',
        'Chart.js',
        'Angular',
      ],
      socialMedia: [
        { label: 'Page', href: 'https://ivieduca.com' },
        { label: 'Youtube', href: 'https://www.youtube.com/@ivieduca5182' },
      ],
    },
    {
      title: 'Whatsapp Bot',
      description: [
        'The main goal of the bot is to provide information and services to users in an easy and efficient way. I have had the opportunity to work as a fullstack, implement the required functionalities for the application, create the user interface/user experience (UX/UI). This has allowed me to improve my personal and technical skills.',
      ],
      paragraphs: [
        {
          subtitle: 'Message reception',
          description:
            'It is capable of receiving messages from users through WhatsApp. You can use the official WhatsApp Business API to interact with the platform.',
        },
        {
          subtitle: 'Message processing',
          description:
            'Once the message is received, it is capable of processing it to understand what the user is requesting or asking. You can use natural language processing tools, such as Dialogflow or IBM Watson, to help your bot understand and respond to messages effectively.',
        },
        {
          subtitle: 'Reply to messages',
          description:
            "Once the user's message is processed, it is able to respond appropriately. You can use the official WhatsApp Business API to send messages back to the user.",
        },
        {
          subtitle: 'Error Handling',
          description:
            'it is capable of handling situations in which it does not understand what the user is requesting or asking, and being able to respond appropriately. This could include error messages, requests for clarification, or recommendations to visit a website or contact a human agent.',
        },
      ],
      tech: [
        'Es6',
        'Typescript',
        'Rxjs',
        'Bootstrap',
        'Angular',
        'Jest',
        'Testing-Library',
        'Postgress',
        'Mailer',
        'Nest.js',
      ],
      socialMedia: [
        { label: 'Page', href: 'https://wwbot.netlify.app/' },
        {
          label: 'Frontend Repository',
          href: 'https://github.com/DavidEspinozaRomero/admin-ww-bot',
        },
        {
          label: 'Backend Repository',
          href: 'https://github.com/DavidEspinozaRomero/whatsappbot',
        },
      ],
    },
    {
      title: "Lilia's Bordados",
      description: [
        'It has been challenging, but also rewarding. Understand the needs and desires of the client and transform them into clear requirements for development. This has allowed me to improve my interpersonal and communication skills.',
        "The experience of dealing with the client is extremely valuable, as it allows one to develop a deeper understanding of the market and the client's needs. In order to create the right features and functionality to satisfy customers and ensure product success.",
      ],
      paragraphs: [
        // {
        //   subtitle: '',
        //   description:
        //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, similique. Beatae dicta minus corporis possimus facere deserunt eveniet quas temporibus! Tenetur sunt fugit dolores expedita odio distinctio atque, quia incidunt?',
        // },
        // {
        //   subtitle: '',
        //   description:
        //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, similique. Beatae dicta minus corporis possimus facere deserunt eveniet quas temporibus! Tenetur sunt fugit dolores expedita odio distinctio atque, quia incidunt?',
        // },
      ],
      tech: ['Es6', 'Bootstrap', 'Sass', 'Angular'],
      socialMedia: [
        { label: 'Page', href: 'https://liliasbordados.netlify.app/' },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/people/Lilias-Bordados/100077040942796/',
        },
      ],
    },
  ];

  project = this.projects[0];
  //#endregion  Variables

  constructor() {}

  ngOnInit(): void {}

  selectProject(project: any) {
    this.project = project;
  }
}
