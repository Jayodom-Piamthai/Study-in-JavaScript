import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { EventComponent } from '../event/event.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [ChildComponent , EventComponent , CounterComponent],
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

  counterValue = signal(0);
  decrement(){
    // this.counterValue.set(this.counterValue() - 1)
    this.counterValue.update((val) => val+1)
    console.log('plus1')
  }
  increment(){
    // this.counterValue.set(this.counterValue() + 1)
    this.counterValue.update((val) => val-1)
  }
  reset(){
    this.counterValue.set(0)
  }
}
