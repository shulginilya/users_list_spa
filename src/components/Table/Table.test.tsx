import { render, screen } from '@testing-library/react';

import { Table } from './Table';

describe('Table', () => {
    it('should render table', () => {
        render(<Table />);
        const tableWrapper = screen.getByTestId('table_root');
        expect(tableWrapper).toBeInTheDocument();
    });
});
