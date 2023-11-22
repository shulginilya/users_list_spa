import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/appStore/store";

import { IUserDetails } from "@/types";

import { makeRequest, getRecordsCount } from "@/utils";

/*
    We define state structure
*/
export enum Status {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};
interface initialStateType {
    users: IUserDetails[];
    user: IUserDetails | null;
    usersCount: number | null;
    status: Status.idle | Status.loading | Status.succeeded | Status.failed;
    error: string | null;
};
const initialState: initialStateType = {
    users: [],
    user: null,
    usersCount: null,
    status: Status.idle,
    error: null
};

/*
    Load users data from the server
*/
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (url: string) => {
    const usersData = await makeRequest({
        url
    });
    return usersData;
});

/*
    Load user by his id
*/
export const fetchUser = createAsyncThunk('users/fetchUser', async (id: string | undefined) => {
    if (!id) {
        return null;
    }
    const userData = await makeRequest({
        url: `/users/${id}`
    });
    return userData;
});

export const fetchUsersCount = createAsyncThunk('users/fetchUsersCount', async (url: string = '') => {
    const recordsCountUrl = url || '/users';
    const usersCount = await getRecordsCount({
        url: recordsCountUrl
    });
    return usersCount;
});


/*
    Slice definition
*/
export const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = Status.loading;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUserDetails[]>) => {
                state.status = Status.succeeded;
                const users = action.payload;
                state.users = users;
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = Status.loading;
                state.user = null;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<IUserDetails>) => {
                state.status = Status.succeeded;
                const user = action.payload;
                state.user = user;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
            .addCase(fetchUsersCount.fulfilled, (state, action: PayloadAction<number | null>) => {
                state.status = Status.succeeded;
                const usersCount = action.payload;
                state.usersCount = usersCount;
            })
            .addCase(fetchUsersCount.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
    }
});

export const selectData = (state: RootState) => state.usersSlice;

export default usersSlice.reducer;
