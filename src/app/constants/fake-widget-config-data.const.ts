import { WidgetConfig } from '../components/widgets';

export const FAKE_WIDGET_CONFIG_DATA: { widgets: WidgetConfig[] } = {
  widgets: [
    {
      id: 'widget-01',
      title: 'Grid 1',
      type: 'grid',
      position: {
        left: 0,
        top: 0,
        width: 6,
        height: 3
      },
      options: {
        headers: [
          {
            fieldId: 'name',
            displayText: 'User Name'
          },
          {
            fieldId: 'role',
            displayText: 'User Role'
          }
        ],
        data: [
          {
            name: 'Mike',
            role: 'Engineer'
          }
        ]
      }
    },
    {
      id: 'widget-02',
      title: 'Text 1',
      type: 'text',
      position: {
        left: 0,
        top: 3,
        width: 3,
        height: 3
      },
      options: {
        content: 'Hello World',
        color: 'white',
        background: '#f00'
      }
    }
  ]
};
