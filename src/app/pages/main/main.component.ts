import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
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

  s6Items = [
    {
      icon: 'bi bi-gear',
      title: 'Best Ideas',
      description:
        'Bring us your wildest ideas and with our creative mindset and tools we’ll make it happen. Our team will provide you with a unique site designed for your specific needs, and help you develop an online business strategy to outplay your competitors.',
    },
    {
      icon: 'bi bi-gear',
      title: 'Connect',
      description:
        'We will connect them real time to your business through multiple means.',
    },
    {
      icon: 'bi bi-gear',
      title: 'Grow',
      description:
        'We will grow your business by supporting your ever expanding customer base and helping you manage your business growth.',
    },
    {
      icon: 'bi bi-gear',
      title: 'Grow',
      description:
        'We will grow your business by supporting your ever expanding customer base and helping you manage your business growth.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
