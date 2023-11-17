export interface ITableColumn {
    key: string;
    name: string;
    title: string;
    onRender?: () => JSX.Element;
};

export interface ITableItem {
    key: string;
    value: string | number | boolean;
    onRender?: () => JSX.Element;
};

export interface ITable {
    resourseName: string;
    columns: ITableColumn[];
    items: ITableItem[][];
    dataTestId?: string;
    excludedColumns?: string[];
};
