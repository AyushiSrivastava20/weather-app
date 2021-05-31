import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindSpeedPipe } from './pipes/wind-speed.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    WindSpeedPipe,
    TemperaturePipe
  ],
  exports: [
    WindSpeedPipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
