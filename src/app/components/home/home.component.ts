import { Component, HostListener } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//   @HostListener('window:resize', ['$event'])
// onResize(event: any) {
//   // الأنجولار لوحده هيعمل Trigger للـ Change Detection وهيعيد رسم السلايدر
// }
//   // 
  customOptionsTop: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    items: 1,
    responsiveRefreshRate: 0, 
    nav: false,
    autoWidth:false,
    responsive:{
      0:{items:1},
      1000:{items:1}
    }
}


}
