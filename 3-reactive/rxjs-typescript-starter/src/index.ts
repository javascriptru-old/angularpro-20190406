import { of, combineLatest, timer, SchedulerAction, Subscription } from 'rxjs';
import { merge, observeOn } from 'rxjs/operators';
import { VirtualAction, VirtualTimeScheduler, queueScheduler, asyncScheduler, asapScheduler } from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

// timer(0, 1000).subscribe({
//   next: (value: any ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

// setTimeout(_ => console.log(3));
// Promise.resolve().then(_ => console.log(2));
// console.log('1')


const vts = new VirtualTimeScheduler();

const o1 = of(1,2).pipe(observeOn(vts));
const o2 = of(10);
const o = combineLatest(o1, o2);
o.subscribe({
  next: (value: any ) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error', error)
});

vts.flush();




// const virtualTimeScheduler = new VirtualTimeScheduler(VirtualAction);
// const async$ = of('async').pipe(observeOn(asyncScheduler));
// const asap$ = of('asap').pipe(observeOn(asapScheduler));
// const queue$ = of('queue').pipe(observeOn(queueScheduler));
// const virtual$ = of('virtual').pipe(observeOn(virtualTimeScheduler));


// const o = async$.pipe(merge(asap$, queue$, virtual$));

// o.subscribe({
//   next: (value: any ) => console.log('Next:', value),
//   complete: () => console.log('Complete!'),
//   error: (error) => console.log('Error', error)
// });

export class MyScheduler extends AsyncScheduler {
  public schedule<T>(
    work: (this: SchedulerAction<T>, state?: T) => void,
    delay: number = 0,
    state?: T
  ): Subscription {
    return super.schedule(work, delay + 5000, state);
  }
}

const myScheduler = new MyScheduler(AsyncAction);
of(1).pipe(observeOn(myScheduler)).subscribe(v => console.log(v));