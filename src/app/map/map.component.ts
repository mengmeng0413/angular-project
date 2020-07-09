import {Component, OnDestroy, OnInit} from '@angular/core';

declare var AMap: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, OnDestroy {
  
  constructor() {
  }
  map: any;
  ngOnInit(): void {
    this.initMap()
  }
  initMap(){
    let that = this
    this.map = new AMap.Map('container', {
        viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
        zoom: 13, //初始化地图层级,
        resizeEnable: true
    });
    AMap.plugin(['AMap.Geolocation'], function() {
      let geolocation = new AMap.Geolocation({
        'showButton': true,//是否显示定位按钮
        'buttonPosition': 'LB',//定位按钮的位置
        'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
        'showMarker': true,//是否显示定位点
        'markerOptions': {//自定义定位点样式，同Marker的Options
          'offset':  new AMap.Pixel(-18, -36),
          'content': '<i class="material-icons">location_on</i>'
        }
      });
      that.map.addControl(geolocation);
      geolocation.getCurrentPosition();
    });
    this.map.on("complete", function(){
      let auto = new AMap.AutoComplete({
          input: "tipInput"
      });
      auto.on('select',function(event){
        this.map.setZoomAndCenter(13, event.poi.location)
      })
    })
  }
  ngOnDestroy(): void {
     this.map && this.map.destroy();
  }
}
