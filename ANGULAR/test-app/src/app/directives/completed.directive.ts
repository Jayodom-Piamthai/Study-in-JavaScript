import { Directive, input , effect, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCompleted]',
  standalone: true ,
})
export class CompletedDirective {
  isCompleted = input(false);
  constructor() { }
  el  = inject(ElementRef)
  styleEffect = (() => {
    if (this.isCompleted()){
      this.el.nativeElement.style.color = '#33FF00';
      this.el.nativeElement.style.backgroundColor = '#FF0033';
    }
    else{
      this.el.nativeElement.style.color = '#FF0033';
      this.el.nativeElement.style.backgroundColor = '#33FF00';
    }
  });
}
