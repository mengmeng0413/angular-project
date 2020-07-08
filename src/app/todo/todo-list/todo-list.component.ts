import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interface';

interface PrivateTodo extends Todo {
  selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: PrivateTodo[] = [
    {id: 999, description: 'des1', category: 1, content: 'test1'},
    {id: 998, description: 'des2', category: 2, content: 'test2'},
    {id: 997, description: 'des3', category: 0, content: 'test3'},
    {id: 996, description: 'des4', category: 1, content: 'test4'},
  ];
  selectall = false;
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  delete(ids: number[]) {
    this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  }
  
  toggalval() {
    this.todos.forEach((item) => {
      item.selected = this.selectall;
    });
  }
  
  check() {
    this.selectall = this.todos.every(item => item.selected);
  }
  
  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);
    this.delete(ids);
  }
  
  navigateTo(todo: PrivateTodo, event: MouseEvent) {
    if (event.target instanceof HTMLTableCellElement) {
      console.log('跳转到详情');
    }
  }
}
