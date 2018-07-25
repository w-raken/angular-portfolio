import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursusComponent } from './cursus/cursus.component';

export const routes: Routes = [
    { path: 'cursus', component: CursusComponent },
    { path: '**', component: HomeComponent }
];