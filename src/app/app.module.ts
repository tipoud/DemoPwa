import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeModule} from './modules/home/home.module';
import {LayoutModule} from './modules/layout/layout.module';
import {AccountModule} from './modules/account/account.module';
import {GeolocModule} from './modules/geoloc/geoloc.module';
import {BarcodeModule} from './modules/barcode/barcode.module';
import {ProductModule} from './modules/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    BarcodeModule,
    GeolocModule,
    HomeModule,
    LayoutModule,
    ProductModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
