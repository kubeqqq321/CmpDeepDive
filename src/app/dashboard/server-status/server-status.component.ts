import {Component, OnInit, OnDestroy, inject, DestroyRef, signal, effect} from '@angular/core';
import {TimeInterval} from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// klasa z onDestory
export class ServerStatusComponent implements OnInit, OnDestroy {

  // currentStatus: 'online' | 'offline' | "unknown" = 'offline';
  // ||
  // takie samo tylko zrobione przy pomocy funkcji signal()
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');


  private interval?: ReturnType<typeof setInterval>

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });

    // 136 -> Angular — kompletny przewodnik (edycja 2024)
    // effect((onCleanup) => {
    //   const tasks = getTasks();
    //   const timer = setTimeout(() => {
    //     console.log(`Current number of tasks: ${tasks().length}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });

  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   const random = Math.random();
    //   this.currentStatus = random < 0.5 ? 'online' : random > 0.90 ? 'offline' : 'unknown';
    // }, 5000);
    // ||
    // to samo zrobione przy pomocy funkcji signal()
    this.interval = setInterval(() => {
      const random = Math.random();
      this.currentStatus.set(random < 0.5 ? 'online' : random > 0.90 ? 'offline' : 'unknown');
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
