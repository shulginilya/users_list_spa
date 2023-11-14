import { render, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    it('should render sidebar', () => {
        render(<Sidebar />);
        const sidebarWrapper = screen.getByTestId('sidebar_root');
        expect(sidebarWrapper).toBeInTheDocument();
    });
});
