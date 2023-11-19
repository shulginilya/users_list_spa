import { render, screen } from '@testing-library/react';

import { ResourceDetails } from './ResourceDetails';
import { testResourceDetailsProps } from './ResourceDetails.data';

describe('ResourceDetails', () => {
    it('should render ResourceDetails', () => {
        render(<ResourceDetails { ...testResourceDetailsProps } />);
        const resourceDetailsWrapper = screen.getByTestId('resource_details_root');
        expect(resourceDetailsWrapper).toBeInTheDocument();
    });
});
