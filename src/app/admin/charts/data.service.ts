import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  getGdpData() {
    return [
      {
        name: 'GM',
        series: [
          {
            name: '2010',
            value: 406
          },
          {
            name: '2000',
            value: 369
          },
          {
            name: '1990',
            value: 314
          }
        ]
      },
      {
        name: 'US',
        series: [
          {
            name: '2010',
            value: 497
          },
          {
            name: '2000',
            value: 459
          },
          {
            name: '1990',
            value: 370
          }
        ]
      },
      {
        name: 'FR',
        series: [
          {
            name: '2010',
            value: 367
          },
          {
            name: '2000',
            value: 347
          },
          {
            name: '1990',
            value: 294
          }
        ]
      },
      {
        name: 'CA',
        series: [
          {
            name: '1990',
            value: 337
          },
          {
            name: '2000',
            value: 598
          },
          {
            name: '2010',
            value: 396
          }
        ]
      }
    ];
  }
}
