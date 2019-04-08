import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { concat, interval } from 'rxjs';
import { take, filter } from 'rxjs/operators';

describe('TEST', () => {
  it('simple', () => {
      const source = cold('x-x-x|');
      const expected = cold('x-x-x|');
      expect(source).toBeObservable(expected);
  });

  it('concat', () => {
    const one$ = cold('x-x|');
    const two$ = cold('-y|');
    const expected = cold('x-x-y|');
    expect(concat(one$, two$)).toBeObservable(expected);
  });

  it('concat', () => {
    const one$ = cold('x-x|', { x : 'some value'});
    const two$ = cold('-y|', { y: 999 });
    const expected = cold('a-a-b|', { a : 'some value', b: 999});
    expect(concat(one$, two$)).toBeObservable(expected);
  });

  it('async', () => {
    const o$ = interval(10, getTestScheduler()).pipe(
        take(5),
        filter(v => v % 2 === 0)
    );
    const expected = cold('-a-b-(c|)', { a : 0, b: 2, c: 4});
    getTestScheduler().flush();
    expect(o$).toBeObservable(expected);
  });


});

