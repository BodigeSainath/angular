import { Directive } from '@angular/core';
import { HostBinding, HostListener} from '@angular/core';
@Directive({
  selector: '[appCharOnly]',
})
export class CharOnly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event']) 
  handleKeyUp(event: KeyboardEvent) {
     const value = (event.target as HTMLInputElement).value;
   // let regex = new RegExp(/^[0-9]*$/);
	 let regex = new RegExp(/^[a-z]+$/);   // Text Only
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }
}
