import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navItem',
    templateUrl: './navItem.component.html',
    styleUrls: ['./navItem.component.scss']
})
export class NavItemComponent implements OnInit {
    @Input() items = []
    constructor() { }

    ngOnInit(): void { }
}
