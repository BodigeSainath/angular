import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
})
export class MySortPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
