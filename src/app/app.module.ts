import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CreateComponent } from './to-do/create/create.component';
import { ListComponent } from './to-do/list/list.component';
import { NewTrainingComponent } from './to-do/new-training/new-training.component';
import { CategorylistComponent } from './category/categorylist/categorylist.component';
import { CategoryComponent } from './category/category.component';
import { EditComponent } from './to-do/edit/edit.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
//import { ToDoservice } from './services/to-do.service';
//import { Categoryservice } from './services/category.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    CreateComponent,
    ListComponent,
    NewTrainingComponent,
    CategorylistComponent,
    CategoryComponent,
    EditComponent,
    CreatecategoryComponent,
    EditcategoryComponent
  ],

  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
