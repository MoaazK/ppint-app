import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl = '/statistics';

  private statisticsSubject: BehaviorSubject<any>;
  public statisticsData$!: Observable<any>;

  constructor(private http: HttpClient) {
    this.statisticsSubject = new BehaviorSubject<any>(null);

    this.setObservables();
  }

  private setObservables(): void {
    this.statisticsData$ = this.statisticsSubject.pipe(
      // debounceTime(1),
      switchMap(() => this.http.get<any>(`${this.apiUrl}/get_statistics`))
    );
  }

  public getStatisticsData(): void {
    this.statisticsSubject.next(null);
  }
}
