import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { AdvancedSearchService } from '@core/services';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('drawer') drawer!: MatDrawer;
  searchForm!: FormGroup;

  private _onDestroy: Subject<void>;

  BASIC_SEARCH = 'basicSearch';
  UNIPROT_ID = 'uniprotID';
  PFAM_NUMBER = 'pfamNumber';
  NCBI_TAX_ID = 'ncbiTaxID';
  ORGANISM = 'organism';
  ENZYME_COMMISSION_NUMBER = 'enzymeCommissionNumber';
  PDB_ID = 'pdbID';
  EXPERIMENTAL_METHOD = 'experimentalMethod';

  maxDate: Date;

  constructor(private formBuilder: FormBuilder,private advancedSearchService: AdvancedSearchService) {
    this._onDestroy = new Subject<void>();
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      basicSearch: new FormControl<string | null>(null),
      uniprotID: new FormControl<string | null>(null),
      pfamNumber: new FormControl<string | null>(null),
      ncbiTaxID: new FormControl<string | null>(null),
      organism: new FormControl<string | null>(null),
      enzymeCommissionNumber: new FormControl<string | null>(null),
      pdbID: new FormControl<string | null>(null),
      experimentalMethod: new FormControl<string | null>(null),
      startDate: new FormControl<Date | null>(null),
      endDate: new FormControl<Date | null>(null)
    });

    // this.searchForm.get('searchType')?.valueChanges
    //   .subscribe(val => {
    //     if (val === 'keyword') {
    //       //
    //     } else {

    //     }
    //   });
  }

  ngAfterViewInit(): void {
    this.advancedSearchService.setDrawer(this.drawer);
  }

  search(): void { }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
