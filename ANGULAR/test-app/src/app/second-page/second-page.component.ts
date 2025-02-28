import { Component } from '@angular/core';
import { ListedComponent } from '../listed/listed.component';

@Component({
  selector: 'app-second-page',
  imports: [ListedComponent],
  template: `
    <p>
      second-page works!
    </p>
    <app-listed/>
  `,
  styles: ``
})
export class SecondPageComponent {

}
