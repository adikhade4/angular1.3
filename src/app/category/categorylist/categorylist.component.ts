import { Component, OnInit } from '@angular/core';
import { Categoryservice } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']

})
export class CategorylistComponent implements OnInit {

  categories;



  constructor(
    categoryService: Categoryservice,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.categories = categoryService.categorytasks;
  }

  ngOnInit() {
  }

  onCategoryNewButtonClick() {

    this.router.navigate(['category', 'careatecategory'])
  }

  deletecategoryFieldValue(cate) {
    this.categories = this.categories.filter(t => t.category !== cate.category);

    this.toastr.warning('Category Deleted Sucessfully');
  }

  onEditcategoryButtonClick(index) {

    this.router.navigate(['/category', 'editcategory', index]);
  }


}
