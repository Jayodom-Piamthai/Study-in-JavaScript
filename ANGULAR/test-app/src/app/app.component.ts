import { Component, input, signal } from '@angular/core';
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
  //data binding with signal with typescript to message() in input component for dynamic rendering
  //will change in page if value changes so better for real time render
  message = signal("signal works fine")
  childInput  = input("sent message from home to child")
}
