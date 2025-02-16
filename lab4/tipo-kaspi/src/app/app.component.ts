import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tipo-kaspi';
}
