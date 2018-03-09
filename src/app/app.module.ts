import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthHttpInterceptor, MyLibModule } from '@my/lib/dist';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule.forRoot({
      interceptor: {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
