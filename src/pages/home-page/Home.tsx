import { useMemo } from 'react';
import { useAppSelector } from "@/appStore/hooks";
import { selectData } from "@/appStore/reducers/themeSlice";
import { MainLayout } from "@/layouts";
import styles from './home.module.scss';

export const Home = (): JSX.Element => {
    const { theme } = useAppSelector(selectData);
    const componentRender = useMemo((): JSX.Element => (
        <div
            className={styles.home}
            data-testid="homepage_root"
        >
            homepage
        </div>
    ), []);

    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    );
};
