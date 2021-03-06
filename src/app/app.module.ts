// Modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CursusComponent } from './cursus/cursus.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

// Providers

// Pipes

// Directives

// Routes
import { routes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuComponent,
		CursusComponent,
		ProjectComponent,
		ContactComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot( routes )
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
