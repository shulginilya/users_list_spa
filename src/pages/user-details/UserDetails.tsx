import { MainLayout } from "@/layouts";
import { ResourceDetails } from "@/components";
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
    const { user } = useAppSelector(selectData);

    useEffect(() => {
		dispatch(fetchUser(id));
	}, [id]);

    const userDetailsProps = useMemo(() => ({
        name: "user_details",
        entity: user,
        fieldsMapping: {
            name: 'Name',
            email: 'E-Mail',
            age: 'Age',
            address: 'Address',
            profilePicture: 'Profile Picture'
        },
        excludedFields: [
            'id'
        ]
    }), [user]);

    const componentRender = useMemo((): JSX.Element => (
        <div data-testid="user_details_root">
            <ResourceDetails { ...userDetailsProps } />
            <div>
                <button
                    data-testid="user_details_back_button"
                    onClick={() => navigate('/users')}
                >go back</button>
            </div>
        </div>
    ), [user]);

    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    );
};
