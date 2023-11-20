import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
    it('should render footer', () => {
        render(<Footer />);
        const footerWrapper = screen.getByTestId('footer_root');
        expect(footerWrapper).toBeInTheDocument();
    });
});
