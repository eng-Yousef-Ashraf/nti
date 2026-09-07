import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Discover } from '../components/discover/discover';
import { About } from '../components/about/about';
import { NotFound } from '../components/not-found/not-found';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"discover",component:Discover},
    {path:"about",component:About},
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"**",component:NotFound}
];
