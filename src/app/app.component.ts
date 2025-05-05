import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { WelfareComponent } from "./welfare/welfare.component";
import { AboutComponent } from "./about/about.component";
import { DescriptionComponent } from './description/description.component';
import { InfoWindowsComponent } from './info-windows/info-windows.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,
    BannerComponent,
    InfoCardsComponent,
    DescriptionComponent, 
    AboutComponent,
    WelfareComponent, 
    InfoWindowsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coonadoc';
}
