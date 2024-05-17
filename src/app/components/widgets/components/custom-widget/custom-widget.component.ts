import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';

import { WidgetConfig } from '../../widget';
import { GridPositionDirective } from '../../directives/grid-position.directive';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'app-custom-widget',
  standalone: true,
  imports: [],
  hostDirectives: [
    {
      directive: GridPositionDirective,
      inputs: [ 'gridPosition' ]
    }
  ],
  template: ``,
  styles: [ `` ]
})
export class CustomWidgetComponent implements AfterViewInit, OnDestroy {
  @Input()
  set config(config: WidgetConfig | null) {
    if ( !config || !config.options ) {
      return;
    }
    this._config = config;
  };

  _config: WidgetConfig | null = null;
  _element: HTMLElement | null = null;

  constructor(
    private _elementRef: ElementRef,
    private _widgetService: WidgetService
  ) {
  }

  ngAfterViewInit(): void {
    if ( !this._config || !this._config.type ) {
      return;
    }

    this._widgetService.loadCustomWidgetScript(this._config.type).subscribe(() => {
      this._element = document.createElement(this._config!.type);
      this._element.setAttribute('config', JSON.stringify(this._config));
      this._element.addEventListener('sort', {
        handleEvent: (event: CustomEvent<{ fieldId: string, sortDirection: 'ASC' | 'DESC', key: string }>) => {
          console.log('Sort event:', event.detail);
        }
      });
      this._elementRef.nativeElement.appendChild(this._element);
    });

    this._widgetService.filterByNameChanged.subscribe((value) => {
      if ( this._element ) {
        this._element.setAttribute('filter', JSON.stringify({ key: 'name', value }));
      }
    });
  }

  ngOnDestroy(): void {
    if ( this._element ) {
      this._elementRef.nativeElement.removeChild(this._element);
    }
  }
}
