import {Component} from '@angular/core';
import {TimeInterval} from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | "unknown" = 'offline';

  constructor() {
    setInterval(() => {
      const random = Math.random();
      this.currentStatus = random < 0.5 ? 'online' : random > 0.90 ? 'offline' : 'unknown';
    }, 5000);

  }
}
