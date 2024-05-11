import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FilterByNameDialogComponent } from './filter-by-name-dialog.component';

describe('FilterByNameDialogComponent', () => {
  let component: FilterByNameDialogComponent;
  let fixture: ComponentFixture<FilterByNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FilterByNameDialogComponent,

        FormsModule,

        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterByNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
