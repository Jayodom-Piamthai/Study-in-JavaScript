import { Component, input ,signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl:"./counter.html",
  styles: ``
})
export class CounterComponent {
  counterValue = signal(0);
  decrement(){
    // this.counterValue.set(this.counterValue() - 1)
    this.counterValue.update((val) => val-1)
    console.log('plus1')
  }
  increment(){
    // this.counterValue.set(this.counterValue() + 1)
    this.counterValue.update((val) => val+1)
  }
  reset(){
    this.counterValue.set(0)
  }
}
