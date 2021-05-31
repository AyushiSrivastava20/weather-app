import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, args: string): string {
    if (!value) {
      return 'N/A'
    }
    if (args === 'metric') {
      return `${value.toFixed()}${String.fromCharCode(176)}C`
    }
    return `${value.toFixed()}${String.fromCharCode(176)}F`;
  }

}
