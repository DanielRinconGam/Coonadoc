import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true
})
export class BannerComponent implements OnInit, OnDestroy {

  banners = [
    {
      image: '/assets/banner_images/banner_1.jpg',
      title: 'Bienvenido a Coonadoc',
      text: 'Somos una cooperativa de ahorro y crédito que cuenta con talento humano idóneo.'
    },
    {
      image: '/assets/banner_images/banner_2.jpg',
      title: 'Accede a créditos',
      text: 'Coonadoc ofrece créditos con un modelo solidario.'
    },
    {
      image: '/assets/banner_images/banner_3.jpg',
      title: 'Disfruta del turismo',
      text: 'Coonadoc promueve el bienestar y disfrute de sus afiliados.'
    },
    {
      image: '/assets/banner_images/banner_4.jpg',
      title: 'Obtén educación',
      text: 'Conadoc apoya el acceso a la educación.'
    },
    {
      image: '/assets/banner_images/banner_5.jpg',
      title: 'Adquiere convenios',
      text: 'Conadoc establece convenios con diversas entidades.'
    }
  ];

  currentIndex = 0;
  galleryBtns = new Array(this.banners.length);

  private intervalId: any;

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateBanner(index: number) {
    this.currentIndex = index;

    clearInterval(this.intervalId);
    this.startInterval();
  }

  private startInterval() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    }, 8000);
  }

}