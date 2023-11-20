import styles from './header.module.scss';

export const Header = (): JSX.Element => (
    <header
        className={styles.header}
        data-testid="header_root"
    >
        Users Lists App
    </header>
);
