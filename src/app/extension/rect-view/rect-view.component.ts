import {Component} from '@angular/core';
import {RectComponent} from '../rect/rect.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rect-view',
  standalone: true,
  imports: [
    RectComponent,
    FormsModule
  ],
  templateUrl: './rect-view.component.html',
  styleUrl: './rect-view.component.css'
})
export class RectViewComponent {
  rectSize = {
    width: '100',
    height: '100',
  };

}
