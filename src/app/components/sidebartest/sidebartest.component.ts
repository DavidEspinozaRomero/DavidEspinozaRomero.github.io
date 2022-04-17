import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebartest",
  templateUrl: "./sidebartest.component.html",
  styleUrls: ["./sidebartest.component.scss"],
})
export class SidebartestComponent implements OnInit {
	sideToggle=true;
  items = [
		{icon:'bi bi-apple', title:'deerhou'},
		{icon:'bi bi-house', title:'dashboard'},
		{icon:'bi bi-person', title:'customers'},
		{icon:'bi bi-chat', title:'message'},
		{icon:'bi bi-question-lg', title:'help'},
		{icon:'bi bi-gear', title:'settings'},
		{icon:'bi bi-lock', title:'password'},
		{icon:'bi bi-box-arrow-right', title:'sign out'},
	];
  constructor() {}

  ngOnInit(): void {}
}
