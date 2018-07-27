import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursusComponent } from './cursus/cursus.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'cursus', component: CursusComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];