import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
option: any;

rating: number;
slideOpts = {
  slidesPerView: 1.5,
  spaceBetween: 5,
  speed: 400,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000
  },
  

  
}

  constructor() {
    this.rating = 5;
  }

 

  onRatingChanged(event: Event) {
    console.log((event as CustomEvent).detail);// this will print the new rating
  }
  


  

}
