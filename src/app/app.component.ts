import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { FAKE_WIDGET_CONFIG_DATA } from './constants/fake-widget-config-data.const';
import { WidgetsComponent, WidgetService } from './components/widgets';
import { FilterByNameDialogComponent } from './components/dialogs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WidgetsComponent,

    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  config = FAKE_WIDGET_CONFIG_DATA;

  constructor(
    private dialog: MatDialog,
    private widgetService: WidgetService
  ) {
  }

  showDialog(): void {
    const dialogRef = this.dialog.open(FilterByNameDialogComponent, {
      data: { name: this.widgetService.filterByName }
    });

    dialogRef.afterClosed().subscribe((name) => {
      if ( name === undefined ) {
        return;
      }

      this.widgetService.filterByName = name;
    });
  }
}
