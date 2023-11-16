import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
