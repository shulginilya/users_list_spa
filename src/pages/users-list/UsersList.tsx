import { useCallback, useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/appStore/hooks";
import {
    Table,
    Pagination,
    UsersTableHeaderCell,
    Search,
    InfoPanel,
    PanelTypes,
} from '@/components';
import type { ITableItem, ITableColumn, ITableColumnsMapping, ISortColumnParams } from '@/components';
import { MainLayout } from "@/layouts";
import { IUserDetails } from '@/types';
import { usersTableConfig } from '@/config';
import {
	selectData,
	fetchUsers,
    fetchUsersCount,
	Status
} from "@/appStore/reducers/usersSlice";
import { buildFetchUsersLink, buildSearchUsersLink } from '@/utils';
import { useParams, useNavigate } from "react-router-dom";

import styles from './user_list.module.scss';

export const UsersList = (): JSX.Element => {
    const navigate = useNavigate();
    const { page } = useParams();
    const currentPage = page ? parseInt(page, 10) : 1;

    const dispatch = useAppDispatch();
    const {
		users,
		status,
        usersCount
	} = useAppSelector(selectData);
    
    // load users from the server
    useEffect(() => {
        const userFetchUrl = buildFetchUsersLink({
            page: currentPage
        });
        dispatch(fetchUsersCount(''));
		dispatch(fetchUsers(userFetchUrl));
	}, [page]);
    
    // revert users table to init state
    const resetUsersTable = useCallback(() => {
        const userFetchUrl = buildFetchUsersLink({
            page: 1
        });
        dispatch(fetchUsers(userFetchUrl));
        dispatch(fetchUsersCount(''));
    }, []);

    // search form submit handler
    const onSubmitSearchHandler = useCallback((searchTerm: string | undefined) => {
        if (searchTerm) {
            const usersSearchUrl = buildSearchUsersLink({
                field: 'name',
                searchTerm
            });
            dispatch(fetchUsers(usersSearchUrl));
            dispatch(fetchUsersCount(usersSearchUrl));
        } else {
            resetUsersTable();
        }
    }, []);
    
    // sort handler
    const onSortHandler = useCallback(({ name, sortOrder }: ISortColumnParams) => {
        const userFetchUrl = buildFetchUsersLink({
            page: currentPage,
            sort: {
                sortField: name,
                sortOrder
            }
        });
        dispatch(fetchUsers(userFetchUrl));
    }, [currentPage]);

    // users table builder
    const usersTable = useMemo(() => {
        if (status !== Status.succeeded) {
            return null;
        }
        const excludedColumns = [
            'id',
            'address',
            'profilePicture'
        ];
        const sortEnabledColumns = [
            'name',
            'age'
        ];
        const tableColumnsMapping: ITableColumnsMapping = {
            name: {
                title: 'Name'
            },
            email: {
                title: 'Email'
            },
            age: {
                title: 'Age'
            }
        };
        const entryUser = users[0];
        const defaultTableColumns: ITableColumn[] = entryUser ? Object.keys(entryUser).map((key) => {
            const title = (tableColumnsMapping[key] && tableColumnsMapping[key].title) ? tableColumnsMapping[key].title : key;
            return {
                key,
                title,
                onRender: () => {
                    if (sortEnabledColumns.indexOf(key) === -1) {
                        return <>{title}</>;
                    }
                    const userTableHeaderCellProps = {
                        title,
                        name: key,
                        onSort: onSortHandler
                    };
                    return <UsersTableHeaderCell { ...userTableHeaderCellProps } />;
                }
            }
        }) : [];
        const extraTableColumns = [
            {
                key: 'action',
                title: '',
            }
        ];
        const tableColumns = [ ...defaultTableColumns, ...extraTableColumns];
        const tableItems: ITableItem[][] = users.map((user: IUserDetails) => {
            const tblItem: ITableItem[] = Object.keys(user).map(k => ({
                key: k,
                value: user[k as keyof typeof user]
            }));
            tblItem.push({
                key: 'action',
                value: '',
                onRender: () => (
                    <button onClick={() => navigate(`/users/details/${user.id}`)}>details</button>
                )
            });
            return tblItem;
        });
        return (
            <Table
                resourseName="users"
                columns={tableColumns}
                items={tableItems}
                excludedColumns={excludedColumns}
                tableColumnsMapping={tableColumnsMapping}
            />
        )
    }, [status, users]);

    // defintion pagination component props
    const pagination = useMemo(() => {
        const paginationProps = {
            currentPage,
            recordsCount: usersCount,
            recordsPerPage: usersTableConfig.usersPerPage,
            url: '/users'
        };
        return (
            <Pagination { ...paginationProps } />
        )
    }, [users, usersCount]);

    // empty results
    const emptyResults = useMemo((): JSX.Element => {
        if (users.length > 0) {
            return <></>;
        }
        return (
            <InfoPanel
                panelText="No users has been found"
                panelType={PanelTypes.error}
            />
        )
    }, [users]);
    
    return (
        <MainLayout>
            <div
                className={styles.user_list}
                data-testid="users_list_root"
            >
                <Search
                    onSubmitSearch={onSubmitSearchHandler}
                    onResetSearch={resetUsersTable}
                />
                {usersTable}
                {emptyResults}
                {pagination}
            </div>
        </MainLayout>
    )
};
