import { createSlice } from "@reduxjs/toolkit";

import projects from '../projectsData';

const defaultState = {
    projectDetail: projects
};

const projectDetailSlice = createSlice({
    name: "projectDetail",
    initialState: defaultState,
    reducers: {
        setProjectDetail(state, action) {
            state.projectDetail = action.payload;
        },
    },
});

export const { setProjectDetail } = projectDetailSlice.actions;
export default projectDetailSlice.reducer;