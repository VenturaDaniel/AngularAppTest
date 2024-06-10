import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

const routerInjection = () => inject(Router);
const authService = () => inject(AuthService);


export const privateGuard: CanActivateFn = async () =>{
    
    const router = routerInjection();

    const {data} = await authService().session();
    
    console.log("private guard 2" + data.session?.user.email);
    if(!data.session){
        router.navigateByUrl('/auth/login');
    }

    return !!data.session;
}

export const publicGuard: CanActivateFn = async () => {
    const router = routerInjection();

    const {data} = await authService().session();

    console.log("public guard " + !data.session);
    if(data.session){
        router.navigateByUrl('/dashboard');
    }

    return !data.session;
};