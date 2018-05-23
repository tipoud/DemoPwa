import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeComponent } from './barcode.component';
import { BarcodeFormComponent } from './barcode-form/barcode-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarcodeComponent, BarcodeFormComponent]
})
export class BarcodeModule { }
