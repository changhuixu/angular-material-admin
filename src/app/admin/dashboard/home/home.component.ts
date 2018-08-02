import { Component, OnInit } from '@angular/core';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  constructor() {}
  ngOnInit() {
    this.places = [
      {
        imgSrc: 'assets/images/card-1.jpg',
        name: 'Cozy 5 Stars Apartment',
        description: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio"
              where you can enjoy the main night life in Barcelona.`,
        charge: '$899/night',
        location: 'Barcelona, Spain'
      },
      {
        imgSrc: 'assets/images/card-2.jpg',
        name: 'Office Studio',
        description: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio"
              where you can enjoy the night life in London, UK.`,
        charge: '$1,119/night',
        location: 'London, UK'
      },
      {
        imgSrc: 'assets/images/card-3.jpg',
        name: 'Beautiful Castle',
        description: `The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio"
              where you can enjoy the main night life in Milan.`,
        charge: '$459/night',
        location: 'Milan, Italy'
      }
    ];
  }
}
