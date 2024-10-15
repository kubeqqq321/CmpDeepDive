import {Component, input, Input, output, signal} from '@angular/core';
import {TicketModel} from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<TicketModel>();
  detailsVisible = signal<boolean>(false);

  close = output()

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    // || to samo
    // this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
