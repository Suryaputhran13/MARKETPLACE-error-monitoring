import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import Bugsnag from '@bugsnag/js'
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular'
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// configure Bugsnag
Bugsnag.start({ 
  apiKey: '63a5a506d8ba7eaf3b97eaef196e1061', 
  collectUserIp: true,
  appVersion: '1.0.0' ,
  enabledReleaseStages: [ 'production', 'staging' ]
});
// created a factory which will return the Bugsnag error handler
export function errorHandlerFactory() {
  return new BugsnagErrorHandler()
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
