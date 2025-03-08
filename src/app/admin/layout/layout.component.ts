import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription;
  constructor() {
    // this.mediaWatcher = media.media$.subscribe((change: any) => {
    //   if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
    //     if (this.sideNavOpened) {
    //       this.sideNavOpened = false;
    //     }
    //     this.sideNavMode = 'over';
    //   } else {
    //     this.sideNavOpened = true;
    //     this.sideNavMode = 'side';
    //   }
    //   if (change.mqAlias === 'xs') {
    //     this.toolBarHeight = 56;
    //   } else {
    //     this.toolBarHeight = 64;
    //   }
    // });
  }
  ngOnInit() { }

  ngOnDestroy(): void {
    // this.mediaWatcher.unsubscribe();
  }
}
