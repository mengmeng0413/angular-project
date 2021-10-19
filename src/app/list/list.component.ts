import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [],
})

export class ListComponent implements OnInit {
  objectKeys = Object.keys;
  str = JSON.stringify;
  tableD: any;
  dataSource:[]
  ngOnInit(): void {
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
  }
  
  type(obj){
    if(typeof obj === 'number' || typeof obj === 'string'){
      return true;
    }else{
      return  false;
    }
  }
}

