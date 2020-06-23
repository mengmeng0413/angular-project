import { Component, OnInit } from '@angular/core';
import {Todo} from "../interface";
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoList') todoList
  constructor() { }

  ngOnInit(): void {
  }
  add(data: Partial<Todo>){
    const id=parseInt(Math.random()*10000+'',10)
    const newTodo = {...data,id}
    this.todoList.todos.push(newTodo)
    console.log('结果：',this.todoList.todos)
  }
}
