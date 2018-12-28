import { Component, OnInit } from '@angular/core';
import { Categoryservice } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  category: string = "";

  categoryService: Categoryservice;
  constructor(
    categoryService: Categoryservice,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryService = categoryService;
  }
  ngOnInit() {
  }
  clearSearch() {

    this.category = null;

  }

  onSubmitClicked() {
    this.categoryService.categorytasks.push(
      new Category(this.category)
    );

    this.category = "";

    this.toastr.success('Category Added Sucessfully');
  }
  onBackButtonClick(){
    this.router.navigate(['/category']);
  }

}

