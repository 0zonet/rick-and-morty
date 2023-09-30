import { Component, Input } from '@angular/core';
import { CharacterElement } from 'src/app/models/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() character : CharacterElement = undefined as any;
}
