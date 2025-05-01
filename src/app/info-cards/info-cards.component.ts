import { Component } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  imports: [],
  templateUrl: './info-cards.component.html',
  styleUrl: './info-cards.component.css'
})


export class InfoCardsComponent {
  cards = [
    {
      title: 'Oficina Virtual',
      image: 'assets/cards_images/oficina_Virtual.png',
      link: 'https://www.ejemplo.com'
    },
    {
      title: 'Mi Pago Amigo',
      image: 'assets/cards_images/mi_pago_amigo.png',
      link: 'https://www.ejemplo.com'
    },
    {
      title: 'Campus',
      image: 'assets/cards_images/campus.png',
      link: 'https://www.ejemplo.com'
    },
    {
      title: 'App Coonadoc',
      image: 'assets/cards_images/app_coonadoc.png',
      link: 'https://www.ejemplo.com'
    }
  ];
}
