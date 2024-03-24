import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todays-forcast',
  templateUrl: './todays-forcast.component.html',
  styleUrls: ['./todays-forcast.component.scss'],
})
export class TodaysForcastComponent {
  @Input() weather: any;
  @Input() isFeh: any;

  x = new Date(2023, 1, 3, 1, 1, 1);
  ngOnInit() {
    console.log(this.weather);
  }
}
