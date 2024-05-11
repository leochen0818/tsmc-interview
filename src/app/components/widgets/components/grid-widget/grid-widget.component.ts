import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { GridPositionDirective } from '../../directives/grid-position.directive';
import { GridWidgetOptionData, GridWidgetOptionHeader, GridWidgetOptions, WidgetConfig } from '../../widget';

@Component({
  selector: 'app-grid-widget',
  standalone: true,
  hostDirectives: [
    {
      directive: GridPositionDirective,
      inputs: [ 'gridPosition' ]
    }
  ],
  templateUrl: './grid-widget.component.html',
  imports: [ MatTableModule ],
  styleUrl: './grid-widget.component.scss'
})
export class GridWidgetComponent {
  @Input()
  set config(config: WidgetConfig | null) {
    if ( !config || !config.options ) {
      this.data = [];
      this.headers = [];
      return;
    }

    const options = config.options as GridWidgetOptions;
    this.title = config.title;
    this.headers = options.headers;
    this.data = options.data;
    this.displayedColumns = options.headers.map(header => header.fieldId);
  };

  title = '';
  data: GridWidgetOptionData[] = [];
  headers: GridWidgetOptionHeader[] = [];
  displayedColumns: string[] = [];
}
