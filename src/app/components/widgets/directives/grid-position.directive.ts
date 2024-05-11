import { Directive, ElementRef, Input } from '@angular/core';
import { WidgetPosition } from '../widget';

@Directive({
  selector: '[gridPosition]',
  standalone: true
})
export class GridPositionDirective {

  @Input()
  set gridPosition(position: WidgetPosition | null) {
    if ( !position ) {
      return;
    }

    const gridRow = `${ position.top + 1 } / ${ position.top + position.height + 1 }`;
    const gridColumn = `${ position.left + 1 } / ${ position.left + position.width + 1 }`;
    
    this._elementRef.nativeElement.style.gridRow = gridRow;
    this._elementRef.nativeElement.style.gridColumn = gridColumn;
  }

  constructor(private _elementRef: ElementRef) {
  }

}
