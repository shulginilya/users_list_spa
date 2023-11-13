import { render, screen } from '@testing-library/react';

import { NotFound } from './NotFound';

describe('404 page', () => {
    it('should render 404 page', () => {
        render(<NotFound />);
        const notFoundPageWrapper = screen.getByTestId('not_found_root');
        expect(notFoundPageWrapper).toBeInTheDocument();
    });
});
