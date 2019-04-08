import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';
import { flatMap, delay } from 'rxjs/operators';

export class MyStrategy implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // if(route.data.preload)
        return of(true).pipe(delay(8000), flatMap(_ => load()));
    };
}
