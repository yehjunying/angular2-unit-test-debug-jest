// import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/never';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatAll';

describe('AppComponent', () => {

  it('should create the app', done => {
    const source = Observable.interval(1000).take(3);
    const newest = source.map(x => Observable.of(1, 2, 3)).concatAll();

    newest.subscribe({
      next: console.log,
      complete: done
    });
  });

});
