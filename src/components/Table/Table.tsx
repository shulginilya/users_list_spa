import { useMemo } from 'react';

import { ITable, ITableItem } from '@/components';

export const Table = ({
    resourseName,
    columns,
    items,
    dataTestId,
}: ITable): JSX.Element | null => {
    // build table headers
    const renderTableHeader = useMemo(() => (
        columns.map(column => (
            <th key={column.key}>
                {column.onRender ? column.onRender() : column.title}
            </th>
        ))
    ), [columns]);
    // build table rows
    const renderTableBody = useMemo(() => (
        items.map((tblRowData: ITableItem[], key: number) => {
            const tblRowKey = `${resourseName}_tbl_row_${key}`;
            const generateTblCells = () => (
                tblRowData.map((tblCellData: ITableItem) => {
                    return (
                        <td key={`${tblRowKey}_cell_${tblCellData.key}`}>
                            {tblCellData.value}
                        </td>
                    )
                })
            );
            return (
                <tr key={tblRowKey}>{generateTblCells()}</tr>
            )
        })
    ), [items]);
    return (
        <div>
            <table data-testid={dataTestId || ''}>
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
