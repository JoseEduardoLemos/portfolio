import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormacaoComponent } from './components/formacao/formacao.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent,
    ProfileComponent,
    FormacaoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
