import { render, screen } from '@testing-library/react';

import { UserDetails } from './UserDetails';

describe('User Details', () => {
    it('should render the page', () => {
        render(<UserDetails />);
        const userDetailsPageWrapper = screen.getByTestId('user_details_root');
        expect(userDetailsPageWrapper).toBeInTheDocument();
    });
});
