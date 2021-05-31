import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args: any): unknown {
    const d = new Date(value);
    const utcTime = d.getTime() + d.getTimezoneOffset() * 60000;
    return new Date(utcTime + (1000 * args));
  }

}
