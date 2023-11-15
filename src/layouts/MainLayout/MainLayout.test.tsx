import { render, screen } from '@testing-library/react';

import { MainLayout } from './MainLayout';

describe('Main Layout', () => {
    it('should render main layout', () => {
        render(<MainLayout />);
        const mainLayoutWrapper = screen.getByTestId('main_layout_root');
        expect(mainLayoutWrapper).toBeInTheDocument();
    });
});
