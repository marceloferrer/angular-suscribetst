import { error } from '@angular/compiler/src/util';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

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
    from([20, 40, 60, 80]).subscribe(
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
