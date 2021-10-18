import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HEROES} from "../heroes";
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from "./component/dialog/dialog.component";
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';
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
  editorOptions: JsonEditorOptions;
  data: any;
  dataJson: any;
  tableD: any;
  tableData: any;
  
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;
  @ViewChild('area') area;
  
  objVal = JSON.stringify({1:{name:1}})
  
  constructor(
    public dialog: MatDialog,
  ) {
    this.reset();
  }
  
  ngOnInit(): void {
    console.log('页面初始化');
    this.initData();
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
  
  reset() {
    this.heroes = HEROES.slice();
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    // this.editorOptions.modes = ['text'];
    this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
    this.dataJson = JSON.stringify(this.data, null , 4);
  }
  
  showData(){
    console.log(JSON.parse(this.dataJson));
  }
  
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
  
  initData() {
    // this.tableData = {
    //   warning_model_id: {
    //     N: "7"
    //   },
    //   model_name: {
    //     S: "洪湖模型"
    //   },
    //   levels:{
    //     L: [
    //       {
    //         M: {
    //           level_name_en: {
    //             S: "normal"
    //           },
    //           level_name: {
    //             S: "正常"
    //           },
    //           level_id: {
    //             N: "0"
    //           }
    //         }
    //       },
    //       {
    //         M:{
    //           level_name_en: {
    //             S: "blue alert"
    //           },
    //           level_name: {
    //             S: "蓝色预警"
    //           },
    //           level_id: {
    //             N: "1"
    //           }
    //         }
    //       }
    //     ]
    //   }
    // }
     this.tableD = {
          alarms: [1,2,3],
          data_source: {_set_: ["electric_field", "lightning"]},
          learners: [{features: {}, learner_s3key: "honghu_rf_201807.pkl", learner_name: "p_30m"}],
          level_basis: "lead_time&ts_intensity",
          level_criteria: {_set_:[0.4,0.6,0.8]},
          levels: [{level_name_en: "normal", level_name: "正常", level_id: 0}],
          model_name: "洪湖输油站预警模型",
          update_datetime: "2019-07-03T07:17:38.069179+0000",
          warning_model_id: 7
        }
     this.tableData = JSON.stringify(this.tableD, null , 4);
  }
}
