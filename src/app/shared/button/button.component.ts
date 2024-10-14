import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button[type], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  nameOnButton!: string;
  type!: string;
  aria?: string;

  foo() {
    console.log(this.type.length)
  }

}
