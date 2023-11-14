import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main Layout', () => {
    it('should render main layout', () => {
        render(<Main />);
        const mainLayoutWrapper = screen.getByTestId('main_layout_root');
        expect(mainLayoutWrapper).toBeInTheDocument();
    });
});
