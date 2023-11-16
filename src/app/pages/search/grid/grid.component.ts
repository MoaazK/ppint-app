import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InterfaceDatasetService } from '@core/services';
import { AgGridAngular } from 'ag-grid-angular';

import { defaultColDefs, interfaceColDefs, pdbColDefs } from './grid-options';
import { CellClickedEvent, GridReadyEvent } from 'ag-grid-community';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  defaultColDefs = defaultColDefs;
  pdbColDefs = pdbColDefs;
  interfaceColDefs = interfaceColDefs;
  pdbRowData$ = [];
  interfaceRowData$ = [];

  private _onDestroy: Subject<void>;

  constructor(private interfaceDatasetService: InterfaceDatasetService) {
    this._onDestroy = new Subject<void>();
    // this.interfaceDatasetService.getInterfaceData('4d2i,4q4w');
  }

  ngOnInit(): void {
    this.interfaceDatasetService.interfaceData$
    .pipe(takeUntil(this._onDestroy))
    .subscribe(data => {
      this.pdbRowData$ = data['pdb'];
      this.interfaceRowData$ = data['interface'];
    });
  }

  onGridReady($event: GridReadyEvent<any, any>) {
    // throw new Error('Method not implemented.');
  }

  onCellClicked($event: CellClickedEvent<any, any>) {
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
