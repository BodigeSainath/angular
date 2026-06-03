import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'testpipe',
})
export class TestpipePipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');
  transform(value : any ): any {
        if (!value) {
      return value;
    }
     const date = new Date(value);

   if (!isNaN(date.getTime())) {
      return this.datePipe.transform(
        value,
        'mediumDate'
      );
    }
    return value;
  }
}
