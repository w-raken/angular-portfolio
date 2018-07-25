import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    constructor() { }
    
    ngOnInit() {
        anime.timeline().add({
            targets: '.lines .lines__group .lines__path',
            strokeDashoffset: [ anime.setDashoffset, 0 ],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: 1000,
            direction: 'alternate',
            loop: true
        });
    }
}
