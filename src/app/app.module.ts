import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodaysForcastComponent } from './todays-forcast/todays-forcast.component';
import { DatePipe } from '@angular/common';
import { DailyForcastComponent } from './daily-forcast/daily-forcast.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TodaysForcastComponent, DailyForcastComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
