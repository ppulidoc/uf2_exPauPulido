import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ExercisisComponent } from './exercisis/exercisis.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
