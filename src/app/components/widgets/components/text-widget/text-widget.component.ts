import { Component, Input } from '@angular/core';

import { GridPositionDirective } from '../../directives/grid-position.directive';
import { TextWidgetOption, WidgetConfig } from '../../widget';

@Component({
  selector: 'app-text-widget',
  standalone: true,
  hostDirectives: [
    {
      directive: GridPositionDirective,
      inputs: [ 'gridPosition' ]
    }
  ],
  templateUrl: './text-widget.component.html',
  styleUrl: './text-widget.component.scss'
})
export class TextWidgetComponent {
  @Input()
  set config(config: WidgetConfig | null) {
    if ( !config || !config.options ) {
      this.title = '';
      this.content = '';
      this.backgroundColor = '';
      this.color = '';
      return;
    }

    const options = config.options as TextWidgetOption;
    this.title = config.title;
    this.content = options.content;
    this.color = options.color;
    this.backgroundColor = options.background;
  }

  title = '';
  content = '';
  color = '';
  backgroundColor = '';
}
