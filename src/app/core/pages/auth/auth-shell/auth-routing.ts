import { Routes } from "@angular/router";

export default [
    {
        path: 'login',
        loadComponent: () => import('../../../components/auth/auth.component'),
    },
    {
        path: '**',
        redirectTo : 'login'
    }
] as Routes;