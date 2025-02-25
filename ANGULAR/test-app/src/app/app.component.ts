import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  template: `
    <app-header/>
    <app-home/>
    <h1>Welcome to {{title}}!</h1>
    <h4>AGGGGGGGGGGGG<h4>
    <router-outlet />
  `,
  styles: [
    `
      h4{
        color:red;
      }
    `
  ],
})
export class AppComponent {
  title = 'test-app';
  message = input("signal works fine")
}
