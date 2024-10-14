import {Component, input, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',

  // to można zastapić przez dodanie w css :host zamiast dashboard-item
  encapsulation: ViewEncapsulation.None,
  host: {class: 'dashboard-item', id: 'dashboard-item'},

})
export class DashboardItemComponent {
  // @Input({required: true}) title!: string;
  // @Input({required: true}) image!: { url: string, alt: string };

  image = input.required<{ url: string, alt: string }>()
  title = input.required<string>();


}
