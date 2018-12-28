import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoservice } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/Category';
import { Categoryservice } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[Categoryservice]

})
export class CreateComponent implements OnInit {
  categories;
  name: string = "";
  category: string = "";
  status: boolean = false;
  //categoryService: Categoryservice;
  toDoService: ToDoservice;

  constructor(
    toDoService: ToDoservice,
    categoryService: Categoryservice,
     private toastr: ToastrService,
     private router: Router,
    private route: ActivatedRoute) {
    this.toDoService = toDoService;
   this.categories = categoryService.categorytasks;
  }
  ngOnInit() {

  }

  clearSearch() {
    this.name = null;
    this.category = null;
    this.status = null;
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );

    this.name = "";
    this.category = "";
    this.status = false;
    this.toastr.success('ToDo Added Sucessfully');
  }
  onBackButtonClick(){
    this.router.navigate(['/todo']);
  }
}





  

