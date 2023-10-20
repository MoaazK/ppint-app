import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  KEYWORD_SEARCH = 'keyword';
  FILE_UPLOAD = 'file';

  _onDestroy: Subject<void>;

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
