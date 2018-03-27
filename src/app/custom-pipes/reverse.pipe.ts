import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: String, args?: any): any {
    let revStr = '';
    for (let i = (value.length - 1); i >= 0; i--) {
      revStr += value.charAt(i);
    }
    return revStr;
  }
}
