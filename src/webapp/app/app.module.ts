import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import {TodoComponent} from "./todolist/todo.component";
import {TodoService} from "./todolist/todo.service";
import {HelloworldComponent} from "./helloworld/helloworld.component";
import {TodoDetailComponent} from "./todolist/todo-detail.component";

@NgModule({
  declarations: [
    TodoComponent,
    AppComponent,
    HelloworldComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }