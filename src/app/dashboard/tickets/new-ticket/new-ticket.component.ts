import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../../../shared/button/button.component';
import {ControlComponent} from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // onSubmit(titleElement: HTMLInputElement, description: HTMLTextAreaElement, form: HTMLFormElement) {
  //   console.log(titleElement.value);
  //   console.log(description.value);
  //   form.reset();
  //
  // }

  // alternatywne przekazywanie formularza z użyciem ViewChild (bez umieszczania formularza w parametrach funkcji)
  @ViewChild('formHTML') form?: ElementRef<HTMLFormElement>;
  // alternatywne przekazywanie formularza
  onSubmit(titleElement: HTMLInputElement, description: HTMLTextAreaElement) {
    console.log(titleElement.value);
    console.log(description.value);
    this.form?.nativeElement.reset();
  }
}
