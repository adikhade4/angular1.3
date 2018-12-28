import { Component, OnInit, EventEmitter, Output, } from '@angular/core';
import { ToDoservice } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  todos;


  
  @Output() deleteToDoButtonClicked = new EventEmitter();
  constructor(
    toDoService: ToDoservice,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.todos = toDoService.tasks;
  }

  ngOnInit() {
  }

  onNewButtonClick() {
    this.router.navigate(['create'], { relativeTo: this.route })
  }


  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
    this.toastr.warning('ToDo Deleted Sucessfully');
  }


  onEditButtonClick(index) {
    this.router.navigate(['/todo', 'edit', index]);
  }


}
