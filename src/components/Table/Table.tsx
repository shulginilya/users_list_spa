import { useMemo } from 'react';

import {
    ITable,
    ITableItem,
    ITableColumn,
} from './Table.types';

import styles from './table.module.scss';

export const Table = ({
    resourseName,
    columns,
    items,
    dataTestId,
    excludedColumns = [],
    tableColumnsMapping = {}
}: ITable): JSX.Element | null => {
    if (columns.length === 0) {
        return null;
    }
    // build table headers
    const renderTableHeader = useMemo(() => (
        columns.map((column: ITableColumn) => {
            if (excludedColumns.indexOf(column.key) > -1) {
                return null;
            }
            const tblHeaderKey = `${resourseName}_tbl_head_${column.key}`;
            return (
                <th key={tblHeaderKey}>
                    {column.onRender ? column.onRender() : column.title}
                </th>
            )
        }).filter(c => c !== null)
    ), [columns]);
    // build table rows
    const renderTableBody = useMemo(() => (
        items.map((tblRowData: ITableItem[], key: number) => {
            const tblRowKey = `${resourseName}_tbl_row_${key}`;
            const generateTblCells = () => (
                tblRowData.map((tblCellData: ITableItem) => {
                    if (excludedColumns.indexOf(tblCellData.key) > -1) {
                        return null;
                    }
                    return (
                        <td key={`${tblRowKey}_cell_${tblCellData.key}`}>
                            {tblCellData.onRender ? tblCellData.onRender() : tblCellData.value}
                        </td>
                    )
                }).filter(c => c !== null)
            );
            return (
                <tr key={tblRowKey}>{generateTblCells()}</tr>
            )
        })
    ), [items]);
    return (
        <div className={styles.table}>
            <table
                className={styles.table}
                data-testid={dataTestId || ''}
            >
                <thead>
                    <tr>
                        {renderTableHeader}
                    </tr>
                </thead>
                <tbody>
                    {renderTableBody}
                </tbody>
            </table>
        </div>
    );
};
