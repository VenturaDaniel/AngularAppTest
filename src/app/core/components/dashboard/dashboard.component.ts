import { Component } from '@angular/core';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import { DocumentsComponent } from '../documents/documents.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent,DocumentsComponent,SearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
