import { useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/appStore/hooks";

import { Table, ITableItem, ITableColumn } from '@/components';

import { MainLayout } from "@/layouts";

import { IUserDetails } from '@/types';

import {
	selectData,
	fetchUsers,
	Status
} from "@/appStore/reducers/usersSlice";
import { useNavigate } from "react-router-dom";

export const UsersList = (): JSX.Element => {
    const navigate = useNavigate();
    /*
        Retrieve data from the users slice
    */
    const dispatch = useAppDispatch();
    const {
		users,
        currentPage,
		status
	} = useAppSelector(selectData);
    
    /*
        Load users from the server
    */
    useEffect(() => {
		dispatch(fetchUsers());
	}, []);

    const usersTable = useMemo(() => {
        if (status !== Status.succeeded) {
            return null;
        }
        const excludedColumns = [
            'id',
            'address',
            'profilePicture'
        ];
        const entryUser = users[0];
        const defaultTableColumns: ITableColumn[] = entryUser ? Object.keys(entryUser).map((key) => {
            return {
                key,
                name: key,
                title: key,
            }
        }) : [];
        const extraTableColumns = [
            {
                key: 'action',
                name: '',
                title: ''
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
                    <button onClick={() => navigate(`/users/${user.id}`)}>details</button>
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
            />
        )
    }, [status]);

    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="users_list_root">
            {usersTable}
        </div>
    ), [status]);
    
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    )
};
