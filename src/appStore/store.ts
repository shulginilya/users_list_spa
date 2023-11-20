// import * as toolkitRaw from '@reduxjs/toolkit';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "@/appStore/reducers/usersSlice";
import themeReducer from "@/appStore/reducers/themeSlice";

export const store = configureStore({
    reducer: {
        usersSlice: usersReducer,
        themeSlice: themeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
