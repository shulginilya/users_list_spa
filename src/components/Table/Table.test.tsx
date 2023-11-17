import { render, screen } from '@testing-library/react';

import { Table } from '@/components';
import { emptyTableTestProps, filledTableTestProps } from './Table.data';

describe('Table', () => {
    it('should not render empty table', () => {
        render(<Table {...emptyTableTestProps} />);
        const tableElement = screen.getByTestId(emptyTableTestProps.dataTestId);
        expect(tableElement).toBeInTheDocument();
    });

    it('should render table', () => {
        render(<Table {...filledTableTestProps} />);
        const tableElement = screen.getByTestId(filledTableTestProps.dataTestId);
        expect(tableElement).toBeInTheDocument();
    });
});
