import { Pipe, PipeTransform } from '@angular/core';
import { listing } from '../model/list.type';
@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(listItem: listing[], searchTerm:string): listing[] {
    if(!searchTerm){
      return listItem;
    }
    const text = searchTerm.toLowerCase();
    return listItem.filter(listing =>{
      return listing.title.toLowerCase().includes(text);
    })
  }

}
