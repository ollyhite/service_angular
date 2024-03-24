import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from './../logging.service';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    // console.log('A server status changed, new status: ' + status);
  }
}

// use inject()
// import { Component, Input, Output, inject } from '@angular/core'; // <- Add inject import

// @Component(...)
// export class AccountComponent {
//   // @Input() & @Output() code as shown in the previous lecture
//   private loggingService?: LoggingService; // <- must be added

//   constructor() {
//     this.loggingService = inject(LoggingService);
//   }
// }
