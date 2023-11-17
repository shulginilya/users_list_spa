import { render, screen } from '@testing-library/react';

import { MainLayout } from '@/layouts';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn()
}));

describe('Main Layout', () => {
    it('should render main layout', () => {
        render(<MainLayout />);
        const mainLayoutWrapper = screen.getByTestId('main_layout_root');
        expect(mainLayoutWrapper).toBeInTheDocument();
    });
});
