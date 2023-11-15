import { useMemo } from 'react'
import { MainLayout } from "@/layouts";

export const Home = (): JSX.Element => {
    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="homepage_root">
            homepage
        </div>
    ), []);

    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    );
};
