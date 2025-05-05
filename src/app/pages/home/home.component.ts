import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { BannerComponent } from '../../banner/banner.component';
import { InfoCardsComponent } from '../../info-cards/info-cards.component';
import { WelfareComponent } from "../../welfare/welfare.component";
import { AboutComponent } from "../../about/about.component";
import { DescriptionComponent } from '../../description/description.component';
import { InfoWindowsComponent } from '../../info-windows/info-windows.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule,RouterOutlet,
    BannerComponent,
    InfoCardsComponent,
    DescriptionComponent, 
    AboutComponent,
    WelfareComponent, 
    InfoWindowsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'coonadoc';
}
