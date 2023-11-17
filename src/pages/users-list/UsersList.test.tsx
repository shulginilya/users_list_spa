import { render, screen } from '@testing-library/react';

import { UsersList } from '@/pages';

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
