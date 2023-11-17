import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "@/appStore/store";

import { IUserDetails } from "@/types";

import { makeRequest } from "@/utils";

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
    users: IUserDetails[],
    user: IUserDetails | null,
    currentPage: number,
    status: Status.idle | Status.loading | Status.succeeded | Status.failed,
    error: string | null;
};
const initialState: initialStateType = {
    users: [],
    user: null,
    currentPage: 1,
    status: Status.idle,
    error: null
};

/*
    Load users data from the server
*/
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const usersData = await makeRequest({
        url: '/users'
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
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUserDetails[]>) => {
                state.status = Status.succeeded;
                const users = action.payload;
                state.users = users;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = Status.loading;
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
    }
});

export const selectData = (state: RootState) => state.usersSlice;

export default usersSlice.reducer;
