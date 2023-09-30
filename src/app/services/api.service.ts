import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = 'https://rickandmortyapi.com/api/';
  
  constructor(private http : HttpClient) { }


  public getCharacters() {
      const url : string = this.base_url + 'character';
      return this.http.get(url);
  }

  public getCharacter(id : number){
    const url : string = this.base_url + 'character/' + id;
    return this.http.get(url);
  }

}
