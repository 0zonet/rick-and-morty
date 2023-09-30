import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterElement } from 'src/app/models/character';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() characters: CharacterElement[] = [];
    @Output() onSelect : EventEmitter<CharacterElement> = new EventEmitter();

    vm$ = this.storage.vm$;
    vm : any;
    constructor(private storage : StorageService){}

    ngOnInit(){
        this.vm$.subscribe(
          (vm)=>{
              this.vm = vm;
          }
        ) 
    }

    public onCardClick(character : CharacterElement){

      if(character.selected){

        this.onSelect.emit(character);

      }else{
        const selectedCharacters = this.vm.characters.filter( (character : CharacterElement)=> character.selected);

        if(selectedCharacters.length < 3){

          character.selected = !character.selected;
          this.onSelect.emit(character);

        }
        else{
          alert("Solo se pueden seleccionar hasta 3 tarjetas");
        }

      }
      
    }
}
