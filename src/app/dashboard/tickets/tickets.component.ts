import {Component} from '@angular/core';
import {NewTicketComponent} from './new-ticket/new-ticket.component';
import {TicketModel} from './ticket.model';
import {TicketComponent} from './ticket/ticket.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTicketComponent,
    TicketComponent,
    NgForOf
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets: TicketModel[] = [];

  onAdd(ticketData: { title: string; description: string }) {
    const ticket: TicketModel = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.description,
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        };
      }
      return ticket;
    });
  }


}
