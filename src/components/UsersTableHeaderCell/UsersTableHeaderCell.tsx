import { useCallback } from 'react'; 

import styles from './users_tbl_header_cell.module.scss';

interface IUsersTableHeaderCell {
    name: string;
    title: string;
    onSort: ({ name, sortOrder}: ISortColumnParams) => void
};

export interface ISortColumnParams {
    name: string;
    sortOrder: 'asc' | 'desc';
};

export const UsersTableHeaderCell = ({
    name,
    title,
    onSort
}: IUsersTableHeaderCell): JSX.Element => {

    const sortColumn = useCallback(({ name, sortOrder }: ISortColumnParams): void => {
        const sortParams = {
            name,
            sortOrder
        };
        onSort(sortParams);
    }, []);

    return (
        <div className={styles.tbl_header_cell}>
            {title}
            <div className={styles.tbl_header_cell__actions}>
                <button
                    onClick={() => sortColumn({
                        name,
                        sortOrder: 'asc'
                    })}
                    className={styles.tbl_header_cell__actions__btn}
                >asc</button>
                <button
                    onClick={() => sortColumn({
                        name,
                        sortOrder: 'desc'
                    })}
                    className={styles.tbl_header_cell__actions__btn}
                >desc</button>
            </div>
        </div>
    )
};