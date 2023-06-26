import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent implements OnInit, OnDestroy {
  inboxValue: number = 0;
  private inboxSubscription: Subscription;
  isInboxRunning: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.inboxSubscription) {
      this.inboxSubscription.unsubscribe();
    }
  }

  startFetchingInbox(): void {
    if (!this.isInboxRunning) {
      this.inboxSubscription = interval(300).subscribe(() => {
        this.inboxValue++;
      });
      this.isInboxRunning = true;
    }
  }

  stopFethchingInbox(): void {
    if (this.isInboxRunning) {
      this.inboxSubscription.unsubscribe();
      this.inboxValue = 0;
      this.isInboxRunning = false;
    }
  }
}
