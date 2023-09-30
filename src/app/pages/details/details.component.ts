import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router  } from "@angular/router";
import { catchError, map, of } from 'rxjs';
import { CharacterElement } from 'src/app/models/character';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public character : CharacterElement;
  public loading : boolean = false;

  public vm$ = this.storage.vm$;
  public vm : any;
  constructor(private storage : StorageService, private route: ActivatedRoute, private router : Router ,private api : ApiService){
    this.character = {
      name : '',
      gender : '',
      created_at : '',
      image : '',
      status : '',
      species : '',
      id : NaN,
      selected: false,
      origin : {
        name: ''
      },
    };
  }

  ngOnInit(){
    this.vm$.subscribe( (vm)=>{
      this.vm = vm;
    });
  }


  public reset(){
     this.storage.resetCharacters(this.vm.characters.map(( character : CharacterElement) => {
      character.selected = false;
      return character;
     }));
  }


}
