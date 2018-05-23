import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './modules/account/account.component';
import {HomeComponent} from './modules/home/home.component';
import {BarcodeComponent} from './modules/barcode/barcode.component';
import {GeolocComponent} from './modules/geoloc/geoloc.component';
import {ProductComponent} from './modules/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'barcode', component: BarcodeComponent},
  { path: 'geoloc', component: GeolocComponent },
  { path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
