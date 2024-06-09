import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthSession, SupabaseClient } from '@supabase/supabase-js';
import { SupabaseService } from './core/services/supa-base.service';
import { DocumentsComponent } from './core/components/documents/documents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,HeaderComponent,FooterComponent,DocumentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'sunat-statements';
  loading = false;
}
