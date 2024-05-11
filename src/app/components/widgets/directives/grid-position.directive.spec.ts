import { ElementRef } from '@angular/core';
import { GridPositionDirective } from './grid-position.directive';

describe('GridPositionDirective', () => {

  it('should create an instance', () => {
    const directive = new GridPositionDirective(new ElementRef(new HTMLElement()));
    expect(directive).toBeTruthy();
  });
});
