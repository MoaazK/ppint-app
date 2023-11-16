import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService {
  private drawer!: MatDrawer;

  constructor() { }

  public setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public toggle(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}
