import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", loadComponent: () => import('./ancient-wonders').then(m => m.AncientWonders) },
    {
        path: "pyramids",
        loadComponent: () => import('./pyramids/pyramids').then(m => m.Pyramids),
        title: 'pyramids'
    },
    {
        path: "colosseum",
        loadComponent: () => import('./colosseum/colosseum').then(m => m.Colosseum),
        title: 'colosseum'
    }
];
