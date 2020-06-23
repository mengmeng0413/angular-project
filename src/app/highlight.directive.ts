import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input() defaultColor: string;
  @Input('appHighLight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
  constructor(private el: ElementRef) { }

  // constructor(el: ElementRef) {
  //   el.nativeElement.style.backgroundColor = 'yellow'
  // }

}
