import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  @ViewChild("mask") mask: ElementRef;
  @ViewChild("maskDesc") maskDesc: ElementRef;
  @ViewChild("maskNext") maskNext: ElementRef;
  allRoute: Array<any>;
  title: Function;
  local = '';
  allMask = [
    {
      id: 'home',
      desc: '第一步的说明'
    },{
      id: 'map',
      desc: '第二步的说明'
    },{
      id: 'routeTest',
      desc: '第三步的说明'
    }
  ];
  constructor(
    private router: Router
  ) { }

   ngOnInit(): void {
     localStorage.setItem('isClick', 'false')
     this.allRoute = this.router.config
     this.getLocal()
     setTimeout(() => {
       this.getMask(this.allMask)
     },500)
   }
   
  getMask(params){
    let mask = this.mask;
    if(params.length === 0){
      mask.nativeElement.style.display = 'none';
      return;
    }
    let {id, desc} = params[0];
    
    let ele = document.getElementById(id);
    let offsetWidth = ele.offsetWidth;
    let offsetHeight = ele.offsetHeight;
    let offsetLeft = ele.offsetLeft;
    let offsetTop = ele.offsetTop;
    
    console.log('该元素的各个距离', offsetWidth, offsetHeight, offsetLeft, offsetTop)
    
    let scrollWidth = document.body.scrollWidth;
    let scrollHeight =  document.body.scrollHeight;
    
    console.log('屏幕大小', scrollWidth, scrollHeight);
    
    mask.nativeElement.style.width = scrollWidth + 'px';
    mask.nativeElement.style.height = scrollHeight + 'px';
    mask.nativeElement.style.borderColor = "rgba(60, 60, 60, 0.5)";
    mask.nativeElement.style.borderStyle = 'solid';
    mask.nativeElement.style.borderLeftWidth = offsetLeft - 5 + 'px';
    mask.nativeElement.style.borderRightWidth = (scrollWidth - offsetWidth - offsetLeft - 5) + 'px';
    mask.nativeElement.style.borderTopWidth = offsetTop - 5 + 'px';
    mask.nativeElement.style.borderBottomWidth = (scrollHeight - offsetHeight - offsetTop - 5) + 'px';
    mask.nativeElement.style.position = 'absolute';
    mask.nativeElement.style.left = 0;
    mask.nativeElement.style.top = 0;
    let maskDesc = this.maskDesc;
    maskDesc.nativeElement.innerHTML = desc;
  }
  
  nextClick(){
    this.allMask.shift();
    this.getMask(this.allMask);
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
