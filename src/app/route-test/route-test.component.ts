import {Component, OnDestroy, OnInit} from '@angular/core';
import {HEROES} from "../heroes";
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from "./component/dialog/dialog.component";

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
}
