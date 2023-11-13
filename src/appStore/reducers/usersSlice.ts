import {
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "@/appStore/store";

interface IUser {
    name: string;
    email: string;
    age: number;
};

interface IUserDetails extends IUser {
    address: string;
    profilePicture: string;
}

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
    data: IUserDetails[],
    status: Status.idle | Status.loading | Status.succeeded | Status.failed,
    error: string | null;
};
const initialState: initialStateType = {
    data: [],
    status: Status.idle,
    error: null
};

/*
    Slice definition
*/
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const selectData = (state: RootState) => state.users;

export default usersSlice.reducer;
