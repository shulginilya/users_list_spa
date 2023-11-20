import { render, screen } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('should render spinner', () => {
        render(<Spinner />);
        const spinnerWrapper = screen.getByTestId('spinner_root');
        expect(spinnerWrapper).toBeInTheDocument();
    });
});
