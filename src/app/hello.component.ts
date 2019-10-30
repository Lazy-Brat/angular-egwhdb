import { Component, Input } from '@angular/core';
// import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
