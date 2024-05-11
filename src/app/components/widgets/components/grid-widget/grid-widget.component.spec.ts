import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWidgetComponent } from './grid-widget.component';
import { MatTableModule } from '@angular/material/table';

describe('GridWidgetComponent', () => {
  let component: GridWidgetComponent;
  let fixture: ComponentFixture<GridWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GridWidgetComponent, MatTableModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GridWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
