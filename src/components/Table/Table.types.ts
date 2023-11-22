export interface ITableColumn {
    key: string;
    title: string;
    onRender?: () => JSX.Element | null;
};

export interface ITableColumnsMapping {
    [key: string]: {
        title: string;
    }
}; 

export interface ITableColumnExtra {
    title: string;
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
    tableColumnsMapping?: {
        [key: string]: ITableColumnExtra
    }
};
