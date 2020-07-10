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
  isSatellite = false;
  isRoadNet = false;
  satelliteLayer: any;
  roadNetLayer: any;
  
  ngOnInit(): void {
    this.initMap();
  }
  
  initMap() {
    let that = this;
    this.satelliteLayer = new AMap.TileLayer.Satellite();
    this.roadNetLayer =  new AMap.TileLayer.RoadNet();
    this.map = new AMap.Map('container', {
      viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
      zoom: 13, //初始化地图层级,
      resizeEnable: true,
      mapStyle:'amap://styles/b6182c02beac9bf34729d1c3e1ad13ca'
    });
    AMap.plugin(['AMap.Geolocation'], function() {
      let geolocation = new AMap.Geolocation({
        'showButton': true,//是否显示定位按钮
        'buttonPosition': 'LB',//定位按钮的位置
        'buttonOffset': new AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
        'showMarker': true,//是否显示定位点
        'markerOptions': {//自定义定位点样式，同Marker的Options
          'offset': new AMap.Pixel(-18, -36),
          'content': '<i class="material-icons">location_on</i>'
        }
      });
      that.map.addControl(geolocation);
      geolocation.getCurrentPosition(function(){
        console.log('定位成功')
      });
    });
    
    this.map.on('complete', function() {
      let auto = new AMap.AutoComplete({
        input: 'tipInput'
      });
      auto.on('select', function(event) {
        that.map.setZoomAndCenter(13, event.poi.location);
      });
    });
  }
  
  ngOnDestroy(): void {
    this.map && this.map.destroy();
  }
  
  satellite() {
     if(this.isSatellite){
        this.map.remove(this.satelliteLayer);
     }else{
        this.map.add(this.satelliteLayer);
     }
     this.isSatellite = !this.isSatellite
  }
  
  roadNet() {
    if(this.isRoadNet){
      this.map.remove(this.roadNetLayer);
    }else{
      this.map.add(this.roadNetLayer);
    }
    this.isRoadNet = !this.isRoadNet
  }
}
