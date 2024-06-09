import { Inject, Injectable, inject } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "../../../environments/environment";
import { SupabaseService } from "./supa-base.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {;

    private _clientAuth = inject(SupabaseService)._supabase;

    constructor(){
        this._clientAuth.auth.onAuthStateChange( session => {
            console.log(session);
        } )
    }

    session(){
        return this._clientAuth.auth.getSession();
    }

    signIn(email : string){
        return this._clientAuth.auth.signInWithOtp({ email})
    }

    singIntWithPassword(email : string, password : string){
        return this._clientAuth.auth.signInWithPassword({email,password})
    }

    signOut(){
        return this._clientAuth.auth.signOut();
    }
}