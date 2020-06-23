import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data_forHero = 'I am data for Hero from test';
  input_value = '';
  bind = '属性绑定语法内容';
  bindDesc = '属性绑定语法的解释说明';
  allData = [{
    key: 1,
    num: 5,
    value: 'data1'
  }, {
    key: 2,
    num: 8,
    value: 'data2'
  }, {
    key: 3,
    num: 3,
    value: 'data3'
  }, {
    key: 4,
    num: 13,
    value: 'data4'
  }];
  @ViewChild('hero') hero;
  constructor(
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  chooseSpan(item){
    console.log('item---', item);
  }

  getData(msg:string){
    alert('子组件穿过来的数据：'+ msg)
  }

  getHeroval(){
    this.hero.unuseMethod()
    console.log(this.hero.str)
  }

  goRouteTest(){
    this.router.navigateByUrl("routeTest").then(r => {})
  }

  routeTo(url: string) {
    this.router.navigate([url]).then(r => {
      console.log('123')
    })
  }
}
