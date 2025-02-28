import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [ChildComponent  , CounterComponent],
  templateUrl:"./home.html" ,
  styles: ``
})
export class HomeComponent {
  childSignal  = signal('child recieved signal from home compo')
  //function to be use when user type in input bar
  //accepting event from inputbar and log it in console
  keyUpOperator(event: KeyboardEvent) {
    console.log(`user typed ${event.key}` )
    // console.log('user typed something!')
  }

}
