import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from "@angular/forms";
import {Category as Cat, Todo} from "../interface";

interface Category {
  id: number,
  name: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;
  categories: Category[]=[{id:0,name: Cat[0]},{id:1,name: Cat[1]},{ id:2,name: Cat[2]}];

  @Output()
  create: EventEmitter<Partial<Todo>> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['',[Validators.required, Validators.maxLength(15)]],
      category: ['',[Validators.required]],
      content: ''
    })
  }
  submit(){
    this.create.next({...this.form.value, category: +this.category.value})
  }
  get description():AbstractControl {
    return this.form.get('description');
  }
  get category():AbstractControl {
    return this.form.get('category');
  }
 }
