import { Sidebar } from '@/components';

interface IMainLayout {
    children?: JSX.Element;
};

export const MainLayout = ({
    children
}: IMainLayout): JSX.Element => (
    <div data-testid="main_layout_root">
        <div><Sidebar /></div>
        <div>{children}</div>
    </div>
);
