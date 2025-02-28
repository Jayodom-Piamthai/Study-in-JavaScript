import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        }
    },
    {
        path:'secondPage',
        pathMatch:'full',
        loadComponent: () => {
            return import('./second-page/second-page.component').then((m) => m.SecondPageComponent)
        }
        
    }
];
