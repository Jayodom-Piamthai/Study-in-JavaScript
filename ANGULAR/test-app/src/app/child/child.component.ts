import { Component , input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child component inside home component works!
    </p>
    <h2>{{childInput()}}</h2>
  `,
  styles: ``
})
export class ChildComponent {
  //establish input so this child component can accept input from its parent,text inside is a default 
  childInput = input('child can accept input!')
}
