import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeLogService } from './services/practice-log.service';
import { PracticeLogListComponent } from './components/practice-log-list/practice-log-list.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PracticeLogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PracticeLogService,
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
