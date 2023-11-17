import { MainLayout } from "@/layouts";
import { useEffect, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/appStore/hooks";
import { useNavigate, useParams } from "react-router-dom";

import {
	selectData,
	fetchUser,
} from "@/appStore/reducers/usersSlice";

export const UserDetails = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const {
		user,
		status
	} = useAppSelector(selectData);

    useEffect(() => {
		dispatch(fetchUser(id));
	}, [id]);

    const renderUserDetailsPanel = useMemo(() => (
        <div>
            {
                user ? (
                    Object.keys(user).map(key => (
                        <div>
                            <div>{key}</div>
                            <div>{user[key as keyof typeof user]}</div>
                        </div>
                    ))
                ) : (
                    <></>
                )
            }
        </div>
    ), [status]);

    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="user_details_root">
            {renderUserDetailsPanel}
            <div>
                <button
                    data-testid="user_details_back_button"
                    onClick={() => navigate('/users')}
                >go back</button>
            </div>
        </div>
    ), [status]);

    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    );
};
