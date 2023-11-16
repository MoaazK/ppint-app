import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isLandingPage: boolean = true;
  toolbarColor: string = 'basic';
  private routeSubscription!: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routeSubscription = this.router.events
    .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/') {
        this.isLandingPage = true;
        this.toolbarColor = 'basic';
      } else {
        this.isLandingPage = false;
        this.toolbarColor = 'primary';
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
