import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
export class WindSpeedPipe implements PipeTransform {

  transform(value: number, args: string): string {
    if (args === 'metric'){
      return `${value} km/h`
    }
    return value.toString();
  }

}
