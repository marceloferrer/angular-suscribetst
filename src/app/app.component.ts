import { error } from '@angular/compiler/src/util';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    //Suscribe with of
    of(2, 4, 6, 8).subscribe(console.log);

    //Suscribe number with from
    from([20, 15, 10, 5, 5, 0])
      .pipe(
        tap(item => console.log(`Original item ... ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item <= 0) {
            throw new Error('Sub Zero');
          }
        }),
        take(4)
      )
      .subscribe(
        item => console.log(`resulting item ... ${item}`),
        error => console.log(`an error has ocurr ... ${error}`),
        () => console.log(`Everything is complete`)
      );

    //Suscribe string with from
    from(['string1', 'string2', 'string3']).subscribe(
      item => console.log(`resulting item ... ${item}`),
      error => console.log(`an error has ocurr ... ${error}`),
      () => console.log(`Everything is complete`)
    );
  }
}
