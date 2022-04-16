import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebartest",
  templateUrl: "./sidebartest.component.html",
  styleUrls: ["./sidebartest.component.scss"],
})
export class SidebartestComponent implements OnInit {
  items = [
		{icon:'bi bi-apple', title:'DEERHOU'},
		{icon:'bi bi-house', title:'dashboard'},
		{icon:'bi bi-person', title:'customers'},
		{icon:'bi bi-chat', title:'message'},
		{icon:'bi bi-question', title:'help'},
		{icon:'bi bi-gear', title:'settings'},
		{icon:'bi bi-lock', title:'password'},
		{icon:'bi bi-box-arrow-right', title:'sign out'},
	];
  constructor() {}

  ngOnInit(): void {}
}
