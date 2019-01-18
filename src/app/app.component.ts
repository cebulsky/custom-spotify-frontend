import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Best Music App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/albums', icon: 'album', label: 'Albums' }
  ];
}
