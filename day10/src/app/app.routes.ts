import { Routes } from '@angular/router';
import { Home } from '../components/home/home';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"discover",loadChildren:()=>import('../components/discover/discover.routes').then(m=>m.routes)},
    {path:"about",loadComponent:()=>import('../components/about/about').then(m=>m.About)},
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"**",loadComponent:()=>import('../components/not-found/not-found').then(m=>m.NotFound)}
];
