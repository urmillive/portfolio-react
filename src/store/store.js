import { configureStore } from "@reduxjs/toolkit";
import projectDetailSlice from '../features/projectDetailSlice';

export const store = configureStore({
    reducer: {
        projectDetail: projectDetailSlice,
    },
});