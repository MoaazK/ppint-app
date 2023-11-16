import { Component, OnDestroy, OnInit } from '@angular/core';
import { InterfaceDatasetService } from '@core/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit, OnDestroy {
  private _onDestroy: Subject<void>;

  selectedInterface: string;
  interfaceList = [];


  constructor(private interfaceDatasetService: InterfaceDatasetService) {
    this._onDestroy = new Subject<void>();
    this.selectedInterface = '';
  }

  ngOnInit(): void {
    this.interfaceDatasetService.interfaceData$
    .pipe(takeUntil(this._onDestroy))
    .subscribe(data => {
      this.interfaceList = data['interface'];
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
