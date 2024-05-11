import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter-by-name-dialog',
  standalone: true,
  imports: [
    FormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './filter-by-name-dialog.component.html',
  styleUrl: './filter-by-name-dialog.component.scss'
})
export class FilterByNameDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<FilterByNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {
  }

  close(name?: string): void {
    this.dialogRef.close(name);
  }
}
