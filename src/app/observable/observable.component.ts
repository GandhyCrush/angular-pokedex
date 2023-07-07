import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  constructor() {}

  obs = new Observable((observer) => {
    setTimeout(() => {
      observer.next('1');
    }, 1000);

    setTimeout(() => {
      observer.next('2');
    }, 2000);

    setTimeout(() => {
      observer.next('3');
    }, 3000);

    setTimeout(() => {
      observer.next('4');
    }, 4000);
    /*
    setTimeout(() => {
      observer.error('Error en el stream');
    }, 4000);
*/
    setTimeout(() => {
      observer.next('5');
    }, 5000);

    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  subscriber: Subscription;

  ngOnInit(): void {
    this.subscriber = this.obs.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log('Error', error),
      complete: () => console.log('El observer ha finalizado'),
    });
    console.log('After subscribe');
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }
}
