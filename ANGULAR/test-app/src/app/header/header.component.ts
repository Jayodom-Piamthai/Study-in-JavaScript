import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    header{
      display:flex;
      padding-inline:16px;
      padding-block:8px;
      background-color:#333;
      color:white;
      padding:30px;
      justify-content:space-between;
    }
  `
})
export class HeaderComponent {
  title =  signal('header title signal test!')
}
