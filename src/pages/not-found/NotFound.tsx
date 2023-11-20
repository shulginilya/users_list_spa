import styles from './not_found.module.scss';

export const NotFound: React.FC = () => (
    <div
        className={styles.not_found}
        data-testid="not_found_root"
    >
        404: page is not found
    </div>
);
