import { render, screen } from '@testing-library/react';

import { Home } from './Home';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppSelector: () => jest.fn()
}));

describe('HomePage', () => {
    it('should render the page', () => {
        render(<Home />);
        const homePageWrapper = screen.getByTestId('homepage_root');
        expect(homePageWrapper).toBeInTheDocument();
    });
});
