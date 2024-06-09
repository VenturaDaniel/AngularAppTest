import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supa-base.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  providers: [SupabaseService,AuthService]
})
export default class AuthComponent {
  
  private _authService = inject(AuthService);
  
  loading = false

  email = '';
  password = '12345678Aa';

  constructor(
    private readonly router : Router
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const { data,error } = await this._authService.singIntWithPassword('test@user.pe',this.password);
      if (error) throw error
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.email = '';
      this.loading = false;
    }
  }

  

  
}
