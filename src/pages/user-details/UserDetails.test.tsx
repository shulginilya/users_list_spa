import { render, screen } from '@testing-library/react';

import { UserDetails } from '@/pages';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
    useParams: () => jest.fn()
}));

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppDispatch: () => jest.fn(),    
    useAppSelector: () => jest.fn()
}));

describe('User Details', () => {
    it('should render the page', () => {
        render(<UserDetails />);
        const userDetailsPageWrapper = screen.getByTestId('user_details_root');
        expect(userDetailsPageWrapper).toBeInTheDocument();
    });
});
