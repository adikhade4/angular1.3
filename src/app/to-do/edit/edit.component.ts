import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoservice } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Categoryservice } from 'src/app/services/category.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[Categoryservice]
})
export class EditComponent implements OnInit,OnDestroy {
 
  id;
  paramSubscription;
  categories;
  @ViewChild('category') category:ElementRef;
  @ViewChild('status') status:ElementRef;
  
  name: string = "";
  categoryService: Categoryservice;
  //Category: string = "";
  //status: boolean = false;
  //toDoService: ToDoservice;

  constructor(
    public toDoService: ToDoservice,
    categoryService: Categoryservice,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories = categoryService.categorytasks;
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

   this.paramSubscription= this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  onSubmitClicked(
    name:HTMLInputElement,
    //category:HTMLInputElement
    ) {
      this.toDoService.tasks[this.id].name = name.value;
      //this.toDoService.tasks[this.id].category= category.value;
      this.toDoService.tasks[this.id].category=this.category.nativeElement.value;
      this.toDoService.tasks[this.id].status = this.status.nativeElement.checked;
    }

  clearSearch() {
    this.name = null;
    this.category = null;
    this.status = null;
    this.toastr.warning('ToDo Cleared Sucessfully');
  }
  onBackButtonClick(){
    this.router.navigate(['/todo']);
  }
}
