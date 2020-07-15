import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  allRoute: Array<any>;
  title: Function;
  local = ''
  constructor(
    private router: Router
  ) { }

   ngOnInit(): void {
     this.allRoute = this.router.config
     this.getLocal()
   }
  
  routeTo(item: any) {
    this.router.navigateByUrl(item.path).then(r => {
      if(r){
        this.getLocal()
      }
    })
  }
  
  getLocal(){
     let reg = /[a-zA-Z]+/
     let now = window.location.pathname.match(reg)[0]
     let obj = this.allRoute.find(item => {
       return item.path === now
     })
     this.local = obj.data.desc
  }
}
