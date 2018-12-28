import { Component, OnInit, Output, EventEmitter, Input,ViewChild,ElementRef} from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Categoryservice } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css'],

})
export class EditcategoryComponent implements OnInit {

  id;

  @ViewChild('category') category : ElementRef;
 //category: string = "";
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
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );

  }
  clearSearch() {

    this.category = null;
    this.toastr.success('Category Cleared Sucessfully');

  }
  onSubmitClicked(category:HTMLInputElement) {
    this.categoryService.categorytasks[this.id].category = this.category.nativeElement.value;
   // this.categoryService.categorytasks[this.id].category = Category.value;
  // this.categoryService.categorytasks[this.id].category;
  }
  onBackButtonClick(){
    this.router.navigate(['/category']);
  }
}
