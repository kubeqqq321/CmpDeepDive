import { Component } from '@angular/core';
import {LifecycleComponent} from '../lifecycle/lifecycle.component';

@Component({
  selector: 'app-lifecycle-view',
  standalone: true,
  imports: [
    LifecycleComponent
  ],
  templateUrl: './lifecycle-view.component.html',
  styleUrl: './lifecycle-view.component.css'
})
export class LifecycleViewComponent {

  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }

}
