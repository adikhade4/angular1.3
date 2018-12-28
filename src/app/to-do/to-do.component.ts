import { Component, OnInit } from '@angular/core';
import { ToDoservice } from '../services/to-do.service';
import { ToDo } from '../models/ToDo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers: [ToDoservice]
})
export class ToDoComponent implements OnInit {
  tasks;
  task: ToDo;
  index: number;

  constructor(toDoService: ToDoservice, private toastr: ToastrService) {
    this.tasks = toDoService.tasks;
  }

  ngOnInit() {
  }
}
