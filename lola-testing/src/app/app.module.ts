import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LolaTestingComponent } from './components/lola-testing/lola-testing.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { LolaService } from '../app/services/lola-testing/lola.service';

@NgModule({
  declarations: [
    AppComponent,
    LolaTestingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [LolaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
