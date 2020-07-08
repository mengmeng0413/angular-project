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
  constructor(
    private router: Router
  ) { }

   ngOnInit(): void {
     this.allRoute = this.router.config
   }
  
  routeTo(item: any) {
    this.router.navigateByUrl(item.path).then(r => {})
  }
}
