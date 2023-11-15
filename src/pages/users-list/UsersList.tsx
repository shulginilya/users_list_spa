import { useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/appStore/hooks";

import { Table } from '@/components';

import { MainLayout } from "@/layouts";

import {
	selectData,
	fetchUsers,
	Status
} from "@/appStore/reducers/usersSlice";

export const UsersList = (): JSX.Element => {
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
		if (status === Status.idle) {
			dispatch(fetchUsers());
		}
	}, [status, dispatch]);

    const usersTable = useMemo(() => {
        if (status !== Status.succeeded) {
            return null;
        }
        const entryUser = users[0];
        const tableColumns = entryUser ? Object.keys(entryUser).map((key) => {
            return {
                key: `user_table_header_${key}`,
                name: key,
                title: key,
            }
        }) : [];
        const tableItems = useMemo(() => ([]), []);
        return (
            <Table
                columns={tableColumns}
                items={tableItems}
            />
        )
    }, [status]);

    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="users_list_root">
            {usersTable}
        </div>
    ), []);
    
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    )
};
