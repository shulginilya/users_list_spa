import { useMemo } from 'react';

import { ITable } from '@/components';

export const Table = ({
    columns,
    items,
    dataTestId,
}: ITable): JSX.Element | null => {
    if (items.length === 0) {
        return null;
    }
    const renderTableHeader = useMemo(() => (
        columns.map(column => (
            <th key={column.key}>
                {column.onRender ? column.onRender() : column.title}
            </th>
        ))
    ), []);
    const renderTableBody = useMemo(() => (
        items.map(item => (
            <td key={item.key}>
                {item.onRender ? item.onRender() : item.value}
            </td>
        ))
    ), []);
    return (
        <div data-testid="table_root">
            <table test-id={dataTestId || ''}>
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
