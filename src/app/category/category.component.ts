import { Component, OnInit } from '@angular/core';
import { Categoryservice } from '../services/category.service';
import { Category } from 'src/app/models/Category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [Categoryservice]
})
export class CategoryComponent implements OnInit {

  categorytasks;
  categorytask: Category;
  index: number;

  constructor(categoryService: Categoryservice, private toastr: ToastrService) {
    this.categorytasks = categoryService.categorytasks;
  }

  ngOnInit() {
  }

}
