import { Injectable } from "@angular/core";
import { AuthSession, SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "../../../environments/environment";


@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    _supabase : SupabaseClient

    constructor(){
        this._supabase = createClient(environment.supabaseUrl,environment.supabaseKey)
    }
}