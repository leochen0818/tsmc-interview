import { WidgetConfig } from '../components/widgets';

export const FAKE_WIDGET_CONFIG_DATA: { widgets: WidgetConfig[] } = {
  widgets: [
    {
      id: 'custom-widget-01',
      title: 'Super Grid 1',
      type: 'super-grid',
      position: {
        left: 0,
        top: 0,
        width: 3,
        height: 3
      },
      options: {
        headers: [
          {
            fieldId: 'name',
            displayText: 'Name'
          },
          {
            fieldId: 'age',
            displayText: 'Age'
          }
        ],
        data: [
          {
            name: 'Mike',
            age: 38
          },
          {
            name: 'Hao',
            age: 18
          }
        ],
        sortableColumns: [ 'age' ]
      }
    }
  ]
};
