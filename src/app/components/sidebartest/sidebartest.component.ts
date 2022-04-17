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
  itemsmain = [
		{icon:'bi bi-eye', title:'views', number:11},
		{icon:'bi bi-cart2', title:'sales', number:111},
		{icon:'bi bi-chat-dots', title:'coments', number:1111},
		{icon:'bi bi-cash', title:'earnings', number:11111},
	];

  itemstable = [
		{ title:'name', description: ' david espinoza'},
		{ title:'price', description: ' 100 '},
		{ title:'payment', description: ' paid '},
		{ title:'status', description: ' delivered '},
	];

  constructor() {}

  ngOnInit(): void {}
}
