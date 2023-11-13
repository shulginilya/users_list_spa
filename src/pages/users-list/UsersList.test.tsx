import { render, screen } from '@testing-library/react';

import { UsersList } from './UsersList';

describe('Users List', () => {
    it('should render the page', () => {
        render(<UsersList />);
        const usersListWrapper = screen.getByTestId('users_list_root');
        expect(usersListWrapper).toBeInTheDocument();
    });
});
