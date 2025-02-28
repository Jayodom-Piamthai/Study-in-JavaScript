import { inject, Injectable } from '@angular/core';
//import listing model to be use
import { listing } from '../model/list.type';
import { HttpClient } from '@angular/common/http';

//injectable code is able to be inject into pages 
@Injectable({
  //by provide it into root of every compo,this can be use anywhere without specifying import
  //remove this to make it non global
  providedIn: 'root'
})
export class ListService {
  //inject http client for CRUD ops
  http = inject(HttpClient);
  //export listItem that is an array of listing from listing model
  listItem: Array<listing> = [
    {
      "userId": 1,
      "id": 1,
      "title": "deletion",
      "completed": false
    },
    {
      "userId": 1,
      "id": 1,
      "title": "angular studies",
      "completed": false
    }
  ]
  // constructor() { }
  getListFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<listing>>(url);
  }
}
