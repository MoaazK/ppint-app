import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvancedSearchService, InterfaceDatasetService } from '@core/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  KEYWORD_SEARCH = 'keyword';
  FILE_UPLOAD = 'file';

  _onDestroy: Subject<void>;

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private advancedSearchService: AdvancedSearchService,
    private interfaceDatasetService: InterfaceDatasetService,
    private router: Router) {
    this._onDestroy = new Subject<void>();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchType: [this.KEYWORD_SEARCH],
      searchField: ['']
    });

    this.searchForm.get('searchType')?.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(val => {
        if (val === this.KEYWORD_SEARCH) {
          //
        } else {

        }
      });
  }

  onAdvancedClick(): void {
    this.advancedSearchService.toggle();
  }

  onSearchClick(): void {
    let searchQuery: string = this.searchForm.get('searchField')?.value;
    if (searchQuery && searchQuery.length > 0) {
      searchQuery = searchQuery.split(',').map(s => s.trim()).join(',');
      this.interfaceDatasetService.getInterfaceData(searchQuery);
      this.router.navigate(['/search'], { queryParams: { pdb_ids: searchQuery } });
    }
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
