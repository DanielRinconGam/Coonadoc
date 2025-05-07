import { Component } from '@angular/core';
import { InfoCardsComponent } from '../../info-cards/info-cards.component';
import { PqrsfComponent } from '../../pqrsf/pqrsf.component';

@Component({
  selector: 'app-online',
  imports: [InfoCardsComponent, PqrsfComponent],
  templateUrl: './online.component.html',
  styleUrl: './online.component.css'
})
export class OnlineComponent {

}

