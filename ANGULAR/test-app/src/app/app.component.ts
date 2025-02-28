import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import components to be use
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  //need to specify import here too
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <app-header/>
    <h1>Welcome to {{title}}!</h1>
    <!-- <app-home/> render normally-->
    <!-- render with router , no need to import more than routerLink-->
    <router-outlet/>
    <!-- everything except router-outlet wont be change by router so use it for static stuff like info bar at bottom -->
    <p>color test</p>
    <h4>AGGGGGGGGGGGG</h4>
  `,
  // styles set css inside compo,but wont leak into what was added to index.html
  styles: [
    `
      h4{
        color:blue;
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
