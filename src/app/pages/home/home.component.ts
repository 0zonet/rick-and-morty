import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { CharacterElement } from 'src/app/models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public dataSource : CharacterElement[] = [];
  public selectedCharacter : CharacterElement;
  public vm$ = this.storage.vm$;
  public showDetailsBtn : boolean = false;

  constructor(private api : ApiService,private storage : StorageService, private router : Router){
    this.selectedCharacter = undefined as any;
  }

  ngOnInit(){

    //init fetch characters
    this.vm$.subscribe( vm => {

        this.showDetailsBtn = !!vm.characters.find( (character) => character.selected );

        if(vm.characters.length === 0){
          this.fetchCharacters();
        }
    });

    
  }

  private fetchCharacters(){

    this.api.getCharacters().subscribe( (response : any) =>{
      // init store manager
      this.storage.updateCharacters(response.results);
    });
      
  }
  
  public onCardClick(character : CharacterElement) : void{
    this.storage.updateSelectedCharacters(character);
  }

  public viewDetails() {
    this.router.navigate(["details"]);
  }
  
}
