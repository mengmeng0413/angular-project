import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() receive: TestComponent;
  @Output() private childOuter = new EventEmitter();
  str = '我是str'
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.childOuter.emit('哈哈哈，子组件向父组件传递信息')
  }
  unuseMethod(){
    alert('unuse')
  }
}
