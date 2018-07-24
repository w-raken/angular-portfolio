import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    private body: any;

    constructor() { }

    ngOnInit() { 
        this.body = document.querySelector('body');
    }

    private toggleClass(): void {
        if (this.body.classList.contains('nav-active')) {
            this.body.classList.remove('nav-active')
        } else {
            this.body.classList.add('nav-active');
        }
    }
}
