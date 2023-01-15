import { Component, OnInit } from '@angular/core';
interface Star {
  filled: boolean;
  key?: number

}

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {

  stars: Star[] = [];
  rateNumber: number = 0;
  addStart: number = 1;
  countStarFive: number = 0;
  countStarFour: number = 0;
  countStarThree: number = 0;
  countStarTwo: number = 0;
  countStarOne: number = 0;
  constructor() { }

  ngOnInit() {
    // initialize empty
    for (let x = 1; x <= 5; x++){
      this.stars.push({ filled: false, key: x })
      //console.log(x);


    }
  }
  rate(e: Event){
    this.reset();
    this.rateNumber = Number((e.target as HTMLElement).id)
    for (let x = 0; x <= this.rateNumber - 1; x++){
      this.stars[x].filled = true;
    }
    if(this.rateNumber == 5) {
      this.countStarFive ++;

      localStorage.setItem('rating',JSON.stringify(this.countStarFive));
    }
    if(this.rateNumber == 4) {
      this.countStarFour ++;
      localStorage.setItem('rating',JSON.stringify(this.countStarFour));
    }
    if(this.rateNumber == 3) {
      this.countStarThree ++;
      localStorage.setItem('rating',JSON.stringify(this.countStarThree));
    }
    if(this.rateNumber == 2) {
      this.countStarTwo ++;
      localStorage.setItem('rating',JSON.stringify(this.countStarTwo));
    }
    if(this.rateNumber == 1) {
      this.countStarOne ++;
      localStorage.setItem('rating',JSON.stringify(this.countStarOne));
    }

  }
  reset(){
    for (let x of this.stars) {
      x.filled = false;
    }
    this.rateNumber = 0;
    this.countStarFive = 0;
    this.countStarFour = 0;
    this.countStarThree = 0;
    this.countStarTwo = 0;
    this.countStarOne = 0;

  }


}
