import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {LayoutModule} from '../layout/layout.module';
import {MatButtonToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonToggleModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
