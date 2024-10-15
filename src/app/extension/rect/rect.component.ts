import {Component, EventEmitter, input, Input, model, output, Output} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css'
})
export class RectComponent {

  // Tworzenie przy pomocy dekoratora
  // @Input({required: true}) size!: { width: string, height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string, height: string }>();
  // onReset() {
  //   this.sizeChange.emit({
  //     width: '200',
  //     height: '100'
  //   });
  // }


  size = model.required<{ width: string, height: string }>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100'
    });
  }

}
