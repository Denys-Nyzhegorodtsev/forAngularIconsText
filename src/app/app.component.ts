import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Icon from './icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Icon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'forReactIconsTests';
}
