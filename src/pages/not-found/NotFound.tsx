import { useMemo } from 'react';

import { MainLayout } from '@/layouts';

import styles from './not_found.module.scss';

export const NotFound = (): JSX.Element => {
    const componentRender = useMemo(() => (
        <div
            className={styles.not_found}
            data-testid="not_found_root"
        >
            404: page is not found
        </div>
    ), []);
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    )
};
