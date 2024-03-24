import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() eventEmitter = new EventEmitter<boolean>();
  isFeh: boolean = true;
  emitEvent() {}
  handlFeh() {
    this.isFeh = true;
    this.eventEmitter.emit(this.isFeh);
  }
  handlCelisious() {
    this.isFeh = false;
    this.eventEmitter.emit(this.isFeh);
  }
}
