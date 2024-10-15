import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit, output,
  Output,
  viewChild
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {


  // onSubmit(titleElement: HTMLInputElement, description: HTMLTextAreaElement, form: HTMLFormElement) {
  //   console.log(titleElement.value);
  //   console.log(description.value);
  //   form.reset();
  //
  // }

  // alternatywne przekazywanie formularza z użyciem ViewChild (bez umieszczania formularza w parametrach funkcji)
  // Wersja z dekoratorem ViewChild
  // @ViewChild('formHTML') form?: ElementRef<HTMLFormElement>;

  // wersja z funkcją viewChild
  private form = viewChild<ElementRef<HTMLFormElement>>('formHTML');

  // oparte na dekoratorze
  // // @Output() addTicket = new EventEmitter<{ title: string, description: string }>();
  // ||
  // oparte na signal
  addTicket = output<{ title: string, description: string }>();
  enteredTitle = "";
  enteredText = "";

  onSubmit(titleElement: HTMLInputElement, description: HTMLTextAreaElement) {
    this.addTicket.emit({
      title: titleElement.value,
      description: description.value
    });

    // console.log(titleElement.value);
    // console.log(description.value);
    // this.form?.nativeElement.reset();
    this.form()?.nativeElement.reset();
  }

  // wykorzstywany dla ngModel
  // onSubmit() {
  //   this.addTicket.emit({
  //     title: this.enteredTitle,
  //     description: this.enteredText
  //   });
  //   this.enteredTitle = "";
  //   this.enteredText = "";
  // }


  ngOnInit() {
    // console.log('OnInit');
    // console.log(this.form()?.nativeElement)
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    // console.log(this.form()?.nativeElement)
  }


}
