import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-daily-forcast',
  templateUrl: './daily-forcast.component.html',
  styleUrls: ['./daily-forcast.component.scss']
})
export class DailyForcastComponent {
@Input() weather:any
}
