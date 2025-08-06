import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'courses', component: FeaturesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent}
];
