import styles from './spinner.module.scss';

export const Spinner = (): JSX.Element => (
    <div
        className={styles.spinner}
        data-testid="spinner_root"
    >
        <div className={styles.spinner__ring} />
    </div>
);
