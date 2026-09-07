import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", loadComponent: () => import('./history').then(m => m.History) },
    {
        path: "ancient-wonders",
       loadChildren:()=>import('./ancient-wonders/ancient-wonders.routes').then(m=>m.routes),
        title: 'ancient-wonders'
    },
    {
        path: "lost-civilizations",
        loadChildren: () => import('./lost-civilizations/lost-civilizations.routes').then(m => m.routes),
        title: 'lost-civilizations'
    }
];
