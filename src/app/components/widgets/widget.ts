export type WidgetType = 'grid' | 'text';

export type WidgetPosition = {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type GridWidgetOptionHeader = {
  fieldId: string;
  displayText: string;
};

export type GridWidgetOptionData = {
  [key: string]: string;
};

export type GridWidgetOptions = {
  headers: GridWidgetOptionHeader[];
  data: GridWidgetOptionData[];
}

export type TextWidgetOption = {
  content: string;
  color: string;
  background: string;
}

export type WidgetConfig = {
  id: string;
  title: string;
  type: WidgetType;
  position: WidgetPosition;
  options: GridWidgetOptions | TextWidgetOption;
}
