import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {

    private body: any;

    constructor( private router: Router ) { }

    ngOnInit() { 
        this.body = document.querySelector( 'body' );
    }

    public toggleClass(): void {
        if ( this.body.classList.contains( 'nav-active' ) ) {
            this.body.classList.remove( 'nav-active' )
        } else {
            this.body.classList.add( 'nav-active' );
        }
    }

    public routingAnimation( route: string ): void {
        let container = <HTMLElement>document.querySelector( '.app-container' );
        container.style.opacity = "0";
        this.toggleClass();
        setTimeout( () => {
            if ( route === "home" ) {
                this.router.navigate( ["/"] );
            } else {
                this.router.navigate( ["/" + route] );
            }
            container.style.opacity = "1";
        }, 900);
    }
}
