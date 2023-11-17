import { render, screen } from '@testing-library/react';

import { Sidebar } from '@/components';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Sidebar', () => {
    it('should render sidebar', () => {
        render(<Sidebar />);
        const sidebarWrapper = screen.getByTestId('sidebar_root');
        expect(sidebarWrapper).toBeInTheDocument();
    });
});
