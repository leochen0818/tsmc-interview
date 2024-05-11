import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WidgetsComponent } from './components/widgets/widgets.component';
import { FAKE_WIDGET_CONFIG_DATA } from './constants/fake-widget-config-data.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, WidgetsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  config = FAKE_WIDGET_CONFIG_DATA;
}
