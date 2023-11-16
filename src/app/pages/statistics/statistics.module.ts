import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    PlotlyModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
