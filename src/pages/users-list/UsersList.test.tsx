import { render, screen } from '@testing-library/react';

import { UsersList } from '@/pages';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppDispatch: () => jest.fn(),    
    useAppSelector: () => jest.fn()
}));

describe('Users List', () => {
    it('should render the page', () => {
        render(<UsersList />);
        const usersListWrapper = screen.getByTestId('users_list_root');
        expect(usersListWrapper).toBeInTheDocument();
    });
});
