import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [NavbarComponent, ToolbarComponent],
  exports: [NavbarComponent, ToolbarComponent]
})
export class LayoutModule { }
