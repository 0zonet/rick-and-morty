import { Pipe, PipeTransform } from '@angular/core';
import { CharacterElement } from '../models/character';

@Pipe({
  name: 'selected'
})
export class SelectedPipe implements PipeTransform {

  transform(characters : CharacterElement[]): CharacterElement[] {
    return characters.filter((character)=> character.selected);
  }

}
