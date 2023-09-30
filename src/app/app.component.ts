import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  vm$ = this.storage.vm$;
  title = 'rick-and-morty';

  constructor(private storage : StorageService){}

  ngOnInit(){
      this.storage.vm$.subscribe((vm)=>{
          if(vm.error !== ''){
            alert(vm.error);
          }
      });
  }
}
