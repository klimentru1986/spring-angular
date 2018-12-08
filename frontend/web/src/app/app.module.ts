import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router/app-router.module';
import { CoreModule } from './core/core.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDataModule } from './store/store.module';
import { XhrInterceptor } from './core/services/xhr-interceptor/xhr-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRouterModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreDataModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
