import { useNavigate } from "react-router-dom";

import styles from './sidebar.module.scss';

export const Sidebar = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div
            className={styles.sidebar}
            data-testid="sidebar_root"
        >
            <ul className={styles.sidebar__list}>
                <li className={styles.sidebar__list__item}>
                    <button
                        className={styles.sidebar__list__item__link}
                        onClick={() => navigate('/')}
                    >Home</button>
                </li>
                <li className={styles.sidebar__list__item}>
                    <button
                        className={styles.sidebar__list__item__link}
                        onClick={() => navigate('/users')}
                    >Users List</button>
                </li>
            </ul>
        </div>
    )
};
