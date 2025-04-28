import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { WelfareComponent } from "./welfare/welfare.component";
import { AboutComponent } from "./about/about.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,
    BannerComponent,
    InfoCardsComponent, 
    WelfareComponent, 
    AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coonadoc';
}
