import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// Para usar RouterLink, hay que importarlo aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page-angular';
}
