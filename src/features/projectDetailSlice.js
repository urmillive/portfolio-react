import { createSlice } from "@reduxjs/toolkit"
const defaultState = {
    projectDetail: {
        title: 'TicTacToe Game',
        logoUrl: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-1024.png',
        bannerUrl: 'https://images.pexels.com/photos/3400795/pexels-photo-3400795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Beginner Level Tic Tac Toe game',
    },
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