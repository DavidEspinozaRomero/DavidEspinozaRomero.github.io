import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  s3Items = [
    {
      number: 01,
      title: "Find",
      description:
        "We will find clients in your area looking for your business services through our targeted marketing systems.",
    },
    {
      number: 02,
      title: "Connect",
      description:
        "We will connect them real time to your business through multiple means.",
    },
    {
      number: 03,
      title: "Grow",
      description:
        "We will grow your business by supporting your ever expanding customer base and helping you manage your business growth.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
