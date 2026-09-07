import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", loadComponent: () => import('./lost-civilizations').then(m => m.LostCivilizations) },
    {
        path: "maya",
        loadComponent: () => import('./maya/maya').then(m => m.Maya),
        title: 'maya'
    },
    {
        path: "atlantis",
        loadComponent: () => import('./atlantis/atlantis').then(m => m.Atlantis),
        title: 'atlantis'
    }
];
