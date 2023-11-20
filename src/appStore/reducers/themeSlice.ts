import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/appStore/store";

/*
    We define state structure
*/
export enum ThemeTypes {
    light = 'light',
    dark = 'dark',
};
interface initialStateType {
    theme: ThemeTypes.light | ThemeTypes.dark,
};
const initialState: initialStateType = {
    theme: ThemeTypes.light
};

/*
    Slice definition
*/
export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {}
});

export const selectData = (state: RootState) => state.themeSlice;

export default themeSlice.reducer;
