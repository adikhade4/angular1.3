import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './to-do/create/create.component';
import { EditComponent } from './to-do/edit/edit.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    component: ToDoComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      { path: 'careatecategory', component: CreatecategoryComponent },
      { path: 'editcategory/:id', component: EditcategoryComponent }
    ]
  },
  { path: '**', redirectTo: 'todo' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
