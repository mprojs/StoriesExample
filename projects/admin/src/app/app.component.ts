import { Component } from '@angular/core';
import { BusyService } from '@shared/services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'MasterKit Stories';

  constructor(
    public busyService: BusyService
  ) {
  }
}
