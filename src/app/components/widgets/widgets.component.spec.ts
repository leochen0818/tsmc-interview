import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsComponent } from './widgets.component';
import { GridWidgetComponent } from './components/grid-widget/grid-widget.component';
import { TextWidgetComponent } from './components/text-widget/text-widget.component';

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WidgetsComponent, GridWidgetComponent, TextWidgetComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
