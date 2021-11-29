import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): Pet[] {
    searchText = searchText.toLocaleLowerCase();
    return pets.filter(pet => pet.name.toLocaleLowerCase().startsWith(searchText));
  }
}
