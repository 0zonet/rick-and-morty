import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CharacterElement } from '../models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends ComponentStore<CharacterState> {


  constructor() {
    super({
      characters: [],
      isSelected : false,
      error: '',
      loading: false
    });
  }

  readonly vm$: Observable<CharacterState> = this.select((state) => state);

  readonly updateError = this.updater(
    (state: CharacterState, error: string) => {
      return {
        ...state,
        error,
      };
    }
  );

  readonly updateCharacters = this.updater(
    (state: CharacterState, characters: CharacterElement[]) => {
      return {
        ...state,
        error: '',
        characters: [...state.characters, ...characters]
      };
    }
  );

  readonly resetCharacters = this.updater(
    (state: CharacterState, characters: CharacterElement[]) => {
      return {
        ...state,
        error: '',
        characters
      };
    }
  );

  readonly updateSelectedCharacters = this.updater(
    (state: CharacterState, selectedCharacter : CharacterElement)=> {

        //update and replace one object
        const characters = state.characters.map((item)=> item.id === selectedCharacter.id ? selectedCharacter : item);

        return {
           ...state,
           error: '',
          characters
        }
    }
  );




}

interface CharacterState {
  characters: CharacterElement[];
  isSelected : boolean;
  error: string;
  loading: boolean;
}
