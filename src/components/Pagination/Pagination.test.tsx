import { render, screen } from '@testing-library/react';

import { paginationTestProps } from './Pagination.data';
import { Pagination } from './Pagination';

describe('Pagination', () => {
    it('should render pagination', () => {
        render(<Pagination { ...paginationTestProps } />);
        const paginationWrapper = screen.getByTestId('pagination_root');
        expect(paginationWrapper).toBeInTheDocument();
    });
});
