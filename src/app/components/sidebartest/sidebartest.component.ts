import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebartest",
  templateUrl: "./sidebartest.component.html",
  styleUrls: ["./sidebartest.component.scss"],
})
export class SidebartestComponent implements OnInit {
  items = [
		{icon:'', title:'dashboard'},
		{icon:'', title:'customers'},
		{icon:'', title:'message'},
		{icon:'', title:'help'},
		{icon:'', title:'settings'},
		{icon:'', title:'password'},
		{icon:'', title:'sign out'},
	];
  constructor() {}

  ngOnInit(): void {}
}
