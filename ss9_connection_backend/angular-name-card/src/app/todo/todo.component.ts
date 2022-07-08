import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../models/todo';
import {TodoService} from "../services/todo.service";
import {Observable} from "rxjs";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos: Todo[] = [];
   content = new FormControl();

  constructor() {
  }
  // constructor(private todoService: TodoService) {
  // }

  ngOnInit() {
    // this.getTodoList();
  }

  // getTodoList() {
  //   this.todoService.getAPI().subscribe(data => {
  //     this.todos = data;
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  // toggleTodoAPI(todo: Todo) {
  //   todo.complete = !todo.complete;
  //   // @ts-ignore
  //   this.todoService.updateAPI(todo.id,todo);
  // }


  public change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }


  // public changeAPI() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todoService.postAPI(todo);
  //     this.content.reset();
  //   }
  // }

}
