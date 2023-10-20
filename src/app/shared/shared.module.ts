import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    ...fromComponents.components
  ]
})
export class SharedModule {
  /* make sure SharedModule is imported only by the AppModule and none else */
  constructor(@Optional() @SkipSelf() presentInParent: SharedModule) {
    if (presentInParent) {
      throw new Error('SharedModule is already loaded. Import only in AppModule');
    }
  }
}
