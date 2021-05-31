import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindSpeedPipe } from './pipes/wind-speed.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    WindSpeedPipe,
    TemperaturePipe,
    CustomDatePipe
  ],
  exports: [
    WindSpeedPipe,
    TemperaturePipe,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
