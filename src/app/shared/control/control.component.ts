import {Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {class: 'control', '(click)': 'onControlClick()'}
})
export class ControlComponent {

  // metoda ta jest jednak odradzana i zaleca sie korzytsanie z host
  // @HostBinding('class') className = 'control';
  nameLabel = input.required<string>();

  // ElementRef = jets to odniesienie do jakiegoś innego elementu renderowanego na stronie
  // private el = inject(ElementRef)
  //
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  onControlClick() {
    console.log('Control clicked');
  }
}
