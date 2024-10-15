import {Component, OnInit, OnDestroy, inject, DestroyRef} from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// klasa z onDestory
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: 'online' | 'offline' | "unknown" = 'offline';
  private interval?: ReturnType<typeof setInterval>

  constructor() {}
  ngOnInit() {
    this.interval = setInterval(() => {
      const random = Math.random();
      this.currentStatus = random < 0.5 ? 'online' : random > 0.90 ? 'offline' : 'unknown';
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}

//klasa z metoda DestroyRef -> jest to klasa z biblioteki @angular/core, która poprzez wstrzyknięcie jej jako zależności do komponentu,
// pozwala na wywołanie metody destroy() w momencie, kiedy komponent jest niszczony.
// METODA TA JEST DOSTĘPNA W NOWYCH WERSJACH ANGULARA
// export class ServerStatusComponent implements OnInit{
//   currentStatus: 'online' | 'offline' | "unknown" = 'offline';
//   private destroyRef = inject(DestroyRef);
//
//   constructor() {}
//   ngOnInit() {
//     const interval = setInterval(() => {
//       const random = Math.random();
//       this.currentStatus = random < 0.5 ? 'online' : random > 0.90 ? 'offline' : 'unknown';
//     }, 5000);
//
//     //wywołanie metody destroy() w momencie, kiedy komponent jest niszczony
//     // jest to listener na zdarzenie onDestroy
//     this.destroyRef.onDestroy(() => {
//       clearInterval(interval);
//     });
//   }
//
// }
