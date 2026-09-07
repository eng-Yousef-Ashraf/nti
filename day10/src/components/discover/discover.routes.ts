import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", loadComponent: () => import('./discover').then(m => m.Discover) },
    {
        path: "history",
        loadChildren:()=>import('./history/history.routes').then(m=>m.routes),
        title: 'History'
    },
    {
        path: "nature",
        loadComponent: () => import('./nature/nature').then(m => m.Nature),
        title: 'Nature'
    }
];
