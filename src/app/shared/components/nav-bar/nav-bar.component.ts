import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

  
export class NavBarComponent {

  constructor( private authService : AuthService )
  {}
  
  stateNav = 'collapsed'
  main_menu = [
    {
      icon: '',
      text: "Dashboard",
      select: true
    },
    {
      icon: '',
      text: 'Comprobantes Electronicos',
      select: false
    },
    {
      icon: '',
      text: 'Guias de Remision',
      select : false
    }
  ]

  changeState(position : number){
    this.main_menu[position].select = true
  }

  cerrarSesion(){
    this.authService.signOut();
  }



}
