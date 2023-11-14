import { Sidebar } from '@/components';

interface IMain {
    children: JSX.Element;
};

export const Main: React.FC = ({
    children
}: IMain) => (
    <div data-testid="main_layout_root">
        <div><Sidebar /></div>
        <div>{children}</div>
    </div>
);
