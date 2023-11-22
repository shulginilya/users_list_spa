import { render, screen } from '@testing-library/react';

import { Search } from './Search';

describe('Search', () => {
    it('should render search', () => {
        render(<Search />);
        const searchWrapper = screen.getByTestId('search_root');
        expect(searchWrapper).toBeInTheDocument();
    });
});
