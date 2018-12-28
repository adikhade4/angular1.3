import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';
import {Category} from '../models/Category';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ToDoservice {
  tasks = [
    new ToDo('Angular Session One', 'CDAC', true),
    new ToDo('Angular Session Two', 'MCA', false),
    new ToDo('Angular Session Three', 'FRESHER', false),
    new ToDo('Angular Session Three', 'BCA', false)
  ];
  categories=[]

  constructor() { }
}
