import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {DashboardItemComponent} from './dashboard-item/dashboard-item.component';
import {TrafficComponent} from './dashboard/traffic/traffic.component';
import {TicketsComponent} from './dashboard/tickets/tickets.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {LifecycleComponent} from './extension/lifecycle/lifecycle.component';
import {LifecycleViewComponent} from './extension/lifecycle-view/lifecycle-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DashboardItemComponent, TrafficComponent, TicketsComponent, ServerStatusComponent, LifecycleComponent, LifecycleViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CmpDeepDive';



}
