export interface IActionProp {
  actions: string;
}

export interface ITableColumn<T> {
  propName: string;
  title?: string;
  enabledSortOrder?: 'ASC' | 'DESC';
  sortType?: T;
  showIf?: string[];
}
