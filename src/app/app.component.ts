import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            BannerComponent,
            InfoCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coonadoc';
}
