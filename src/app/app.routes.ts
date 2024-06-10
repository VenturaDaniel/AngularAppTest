import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { privateGuard, publicGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        canActivate: [publicGuard],
        loadChildren: () => import('./core/pages/auth/auth-shell/auth-routing'),
    },
    {
        path: 'dashboard',
        canActivate: [privateGuard],
        loadComponent: () => import('./core/components/dashboard/dashboard.component')
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path:'**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    }
    
];
