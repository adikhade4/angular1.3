import { Injectable } from '@angular/core';

import { Category } from '../models/Category';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class Categoryservice {
  categorytasks = [
    new Category('CDAC'),
    new Category('FRESHER'),
    new Category('MCA'),
    new Category('BCA')
  ];

  constructor() { }
}
