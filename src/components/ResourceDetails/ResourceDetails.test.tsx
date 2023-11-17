import { render, screen } from '@testing-library/react';

import { ResourceDetails } from '@/components';

describe('ResourceDetails', () => {
    it('should render ResourceDetails', () => {
        render(<ResourceDetails />);
        const resourceDetailsWrapper = screen.getByTestId('resource_details_root');
        expect(resourceDetailsWrapper).toBeInTheDocument();
    });
});
