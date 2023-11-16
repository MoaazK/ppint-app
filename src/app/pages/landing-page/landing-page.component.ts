import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  // KEYWORD_SEARCH = 'keyword';
  // FILE_UPLOAD = 'file';

  // _onDestroy: Subject<void>;

  // searchForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder, private advancedSearchService: AdvancedSearchService) {
  //   this._onDestroy = new Subject<void>();
  // }

  // ngOnInit(): void {
  //   this.searchForm = this.formBuilder.group({
  //     searchType: [this.KEYWORD_SEARCH],
  //     searchField: ['']
  //   });

  //   this.searchForm.get('searchType')?.valueChanges
  //     .pipe(takeUntil(this._onDestroy))
  //     .subscribe(val => {
  //       if (val === this.KEYWORD_SEARCH) {
  //         //
  //       } else {

  //       }
  //     });
  // }

  // onAdvancedClick(): void {
  //   this.advancedSearchService.toggle();
  // }

  // ngOnDestroy(): void {
  //   this._onDestroy.next();
  //   this._onDestroy.complete();
  // }
}
