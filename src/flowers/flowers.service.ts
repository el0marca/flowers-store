import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        color: 'red',
        name: 'Rose',
        price: 5,
      },
      {
        color: 'yellow',
        name: 'Tulip',
        price: 5,
      },
      {
        color: 'green',
        name: 'Lily',
        price: 5,
      },
    ];
  }
}
