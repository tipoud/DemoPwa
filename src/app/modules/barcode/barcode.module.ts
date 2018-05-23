import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeComponent } from './barcode.component';
import { BarcodeFormComponent } from './barcode-form/barcode-form.component';
import { ScannerComponent } from './scanner/scanner.component';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  declarations: [BarcodeComponent, BarcodeFormComponent, ScannerComponent]
})
export class BarcodeModule { }
