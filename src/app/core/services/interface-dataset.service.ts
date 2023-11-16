import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, debounceTime, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceDatasetService {
  private apiUrl = '/interface';

  private interfaceSubject: BehaviorSubject<any>;
  // private pdbSubject: BehaviorSubject<any>;
  public interfaceData$!: Observable<any>;
  public pdbData$!: Observable<any>;

  constructor(private http: HttpClient) {
    this.interfaceSubject = new BehaviorSubject<any>(null);
    // this.pdbSubject = new BehaviorSubject<any>(null);
    // this.interfaceData$ = this.interfaceSubject.asObservable();
    this.setObservables();
  }

  private setObservables(): void {
    this.interfaceData$ = this.interfaceSubject.pipe(
      debounceTime(300),
      switchMap((query: any) => this.http.get<any>(`${this.apiUrl}/get_interface_detail?pdb_ids=${query}`))
    );
  }

  public getInterfaceData(query: any): void {
    this.interfaceSubject.next(query);
  }
}
