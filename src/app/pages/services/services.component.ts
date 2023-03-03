import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceIconsComponent, ServiceImgsComponent } from './components';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceIconsComponent, ServiceImgsComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      title: 'Development of web sites, responsive and mobile',
      articles: [
        {
          icon: 'bi bi-display',
          subtitle: 'Website',
          description:
            'Helps create brand awareness and showcasing your brand to prospective customers. Provides reliable information to the consumers, which helps in setting your business apart from the competitors.',
        },
        {
          icon: 'bi bi-aspect-ratio',
          subtitle: 'Responsive',
          description:
            'More and more visitors use their phones to surf the web, so it caters to their needs. Better user experience can lead to higher conversion rates and lower bounce rates.',
        },
        {
          icon: 'bi bi-tablet',
          subtitle: 'Mobile',
          description:
            'Everything can be consulted from the cell phone. It is an excellent communication channel between organizations and their users or clients.',
        },
      ],
    },
    // {
    //   title: 'Design to UX/UI',
    //   articles: [
    //     {
    //       img: '../../../assets/photos/ui_ux.jfif',
    //       subtitle: 'The importance of UX/UI',
    //       description: '',
    //     },
    //   ],
    // },
    // {
    //   title: 'Design to UX/UI',
    //   articles: [
    //     {
    //       icon: 'bi bi-filetype-pdf',
    //       subtitle: 'Pdf File',
    //       description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto molestias numquam impedit, ipsa nemo mollitia iure nam eaque, dignissimos quas vel. Itaque autem, officiis qui sit eaque in dolores!',
    //     },
    //     {
    //       icon: 'bi bi-window-stack',
    //       subtitle: 'Figma/XD',
    //       description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto molestias numquam impedit, ipsa nemo mollitia iure nam eaque, dignissimos quas vel. Itaque autem, officiis qui sit eaque in dolores!',
    //     },
    //   ],
    // },
    {
      title: 'Creation of web apps',
      articles: [
        {
          icon: 'bi bi-window-stack',
          subtitle: 'Design to Code',
          description:
            'The design of an application is necessary because it allows creating an attractive and functional user experience, carrying out planning and development, increasing user satisfaction and product success.',
        },
        {
          icon: 'bi bi-building-gear',
          subtitle: 'Best Practices',
          description:
            'Application of techniques and methodologies to create high quality software. Ensuring that the website or application is secure, scalable, and easy to maintain.',
        },
        {
          icon: 'bi bi-list-check',
          subtitle: 'Unit Testing',
          description:
            'They are used to make sure that each function or component works correctly and produces the expected results. Essential to ensure software quality and facilitate long-term maintenance.',
        },
      ],
    },
    {
      title: 'Consultancy and Maintenance',
      articles: [
        {
          icon: 'bi bi-gear',
          subtitle: 'Scalability',
          description:
            'Ability of a website or application to handle a larger number of users or transactions. it is important that it is scalable as the business grows or more users are added. This may include the use of cloud technologies, database optimization and the implementation of caching techniques.',
        },
        {
          icon: 'bi bi-building-up',
          subtitle: 'Update',
          description:
            'It is important to keep the website or application updated with the latest technologies and functionality to ensure that it remains relevant and useful to users. Updates may also include security patches and bug fixes to ensure the security and stability of the software.',
        },
        {
          icon: 'bi bi-person-video',
          subtitle: 'Guidance and recommendations',
          description:
            'They are useful for anyone looking for advice in specific areas, such as design, speed optimization, security, or scalability. guidance and recommendations on best practices and the latest trends in web development.',
        },
      ],
    },
    // {
    //   title: 'Consultancy',
    //   articles: [
    //     // { icon: 'bi bi-chat', subtitle: 'advice', description: '' },
    //     {
    //       icon: 'bi bi-person-video',
    //       subtitle: 'Guidance and recommendations',
    //       description:
    //         'They are useful for anyone looking for advice in specific areas, such as design, speed optimization, security, or scalability. guidance and recommendations on best practices and the latest trends in web development.',
    //     },
    //   ],
    // },
    // {
    //   title: 'Personalized tutoring',
    //   articles: [
    //     { icon: 'bi bi-heart', subtitle: '', description: '' },
    //     { icon: 'bi bi-heart', subtitle: '', description: '' },
    //   ],
    // },
  ];
}

export interface ServiceProps {
  title: string;
  articles: {
    icon?: string;
    img?: string;
    subtitle: string;
    description: string;
  }[];
}
