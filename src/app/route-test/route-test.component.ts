import {Component, OnDestroy, OnInit} from '@angular/core';
import {HEROES} from "../heroes";
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from "./component/dialog/dialog.component";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-route-test',
  templateUrl: './route-test.component.html',
  styleUrls: ['./route-test.component.css'],
   providers: [],
})
export class RouteTestComponent implements OnInit, OnDestroy {
  values = '';
  value = '';
  color = '';
  selectVal = '1';
  birthday = new Date(1998, 4, 8);
  toggle = true;
  power = 5;
  factor = 1;
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  animal: string;
  name: string;
  show: false;
  objVal = JSON.stringify({1:{name:1}})
  constructor(
    public dialog: MatDialog
  ) {
    this.reset();
  }
  ngOnInit(): void {
    console.log('页面初始化')
  }
  ngOnDestroy(): void {
    console.log('页面销毁')
  }

  addHero(name: string){
    name = name.trim();
    if(!name) { return; }
    let hero = { name, canFly: this.canFly };
    if(this.mutate){
      this.heroes.push(hero);
    }else{
      this.heroes = this.heroes.concat(hero);
    }
  }
  reset() { this.heroes = HEROES.slice(); }
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
  onClickMe() {
    this.values = ''
  }
  onKey(event: any) {
    this.values += event.target.value + '|'
  }
  update(value: string) {
    this.value = value;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
  mockInterface() {
    new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log('resolve')
        resolve()
      },5000)
    }).then(r =>{})
  }
  
  fiveSecond(ms){
    return new Promise(resolve => {
      setTimeout(resolve,ms)
    })
  }
  
  async later(val, ms) {
    await this.fiveSecond(ms)
    console.log('value--', val)
  }
  
  tryAsync1() {
    this.later('123', 5000).then((r)=>{})
  }
  
  threeMin() {
    return new Promise(resolve => {
      setTimeout(function() {
        console.log('延时3秒执行')
        resolve()
      },3000)
    })
  }
  
  async threeMinNext() {
    await this.threeMin()
    console.log('3秒后执行')
    return '执行完毕'
  }
  
  tryAsync2(){
    this.threeMinNext().then(r =>{
      console.log(r)
    })
  }
  
  copy1(){
    let arr = [1,2,3]
    let newArr = arr.slice();
    console.log('newArr---', newArr)
  }
  
  subscribe(){
    const locations = new Observable((observer) => {
      let watchId: number;
    
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
      
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
    
    const locationsSubscription = locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
    
    setTimeout(() => {
      locationsSubscription.unsubscribe();
    }, 10000);
  }
}
