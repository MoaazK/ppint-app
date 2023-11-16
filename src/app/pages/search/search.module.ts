import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { GridComponent } from './grid/grid.component';
import { VisualizationComponent } from './visualization/visualization.component';


@NgModule({
  declarations: [
    SearchComponent,
    GridComponent,
    VisualizationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
