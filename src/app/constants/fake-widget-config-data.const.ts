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
        width: 12,
        height: 4
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
          },
          {
            name: 'Jeff',
            role: 'Engineer'
          }
        ]
      }
    },
    {
      id: 'widget-02',
      title: 'Grid 2',
      type: 'grid',
      position: {
        left: 0,
        top: 5,
        width: 5,
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
            age: '38'
          },
          {
            name: 'Hao',
            age: '18'
          }
        ]
      }
    },
    {
      id: 'widget-03',
      title: 'Grid 3',
      type: 'grid',
      position: {
        left: 7,
        top: 5,
        width: 5,
        height: 3
      },
      options: {
        headers: [
          {
            fieldId: 'step',
            displayText: 'Step'
          },
          {
            fieldId: 'result',
            displayText: 'Result'
          }
        ],
        data: [
          {
            step: 'Create',
            result: 'Pass'
          },
          {
            step: 'Validate',
            result: 'Fail'
          }
        ]
      }
    }
  ]
};
