import { Component, inject, OnInit, output, signal } from '@angular/core';
import { ListService } from '../service/list.service';
import { listing } from '../model/list.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { CompletedDirective } from '../directives/completed.directive';
import { FormsModule } from '@angular/forms';
import { FilterListPipe } from '../pipes/filter-list.pipe';

@Component({
  selector: 'app-listed',
  imports: [ CompletedDirective , FormsModule, FilterListPipe],
  templateUrl:'./listed.html',
  styles: ``
})
export class ListedComponent implements OnInit {
  //injecting listService class from model into this component
  listService = inject(ListService)
  //create signal to send list array to page
  listItem = signal<Array<listing>>([])

  ngOnInit(): void {
    //invoking ListService's listitem and log it
    // console.log(this.listService.listItem);  
    //on start , set value of list item to listitem of listservice
    // this.listItem.set(this.listService.listItem);
    this.listService
    .getListFromApi()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
        }
      )
    )
    .subscribe((listing) => {
      this.listItem.set(listing);
      }
    )

  }

  todoToggle = output<listing>()
  todoClicked() {
    // this.todoToggle.emit(this.listItem());
  }
}
