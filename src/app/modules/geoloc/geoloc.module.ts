import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocComponent } from './geoloc.component';
import {AppConstants} from '../../shared/utils/app-constants';
import {MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../layout/layout.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: AppConstants.GOOGLE_API_KEY,
      libraries: ['places']
    }),
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  declarations: [GeolocComponent]
})
export class GeolocModule {}
