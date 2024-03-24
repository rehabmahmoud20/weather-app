import { Component, OnInit } from '@angular/core';
import { ApisService } from './services/apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _ApisService: ApisService) {}
  title = 'instaweather';

  data: any = '';
  isFeh: boolean = true;
  ngOnInit() {
    this._ApisService.fetchApi().subscribe({
      next: (reponse) => {
        console.log(reponse);
        this.data = reponse;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  handleEvent(eventData: boolean) {
    this.isFeh = eventData;
  }
}
