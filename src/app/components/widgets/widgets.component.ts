import { Component, Input } from '@angular/core';

import { WidgetConfig } from './widget';
import { GridWidgetComponent } from './components/grid-widget/grid-widget.component';
import { TextWidgetComponent } from './components/text-widget/text-widget.component';
import { CustomWidgetComponent } from './components/custom-widget/custom-widget.component';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [
    GridWidgetComponent,
    TextWidgetComponent,
    CustomWidgetComponent
  ],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {
  @Input() configs: WidgetConfig[] = [];
}
