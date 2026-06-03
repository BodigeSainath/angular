import { Directive, ElementRef } from '@angular/core';
import { HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  //create elementref class instance
  constructor(private ele:ElementRef) {
    console.log(ele.nativeElement);

  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.ele.nativeElement.style.transform = 'scale(1.1)'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.ele.nativeElement.style.transform = 'scale(0.9)'
  }
}
