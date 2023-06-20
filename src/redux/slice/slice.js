import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {services} from "../../sevices/services";

const initialState = {
    categories:[],
    teachers:[],
    avg:[]
};

const getCategories = createAsyncThunk(
    'categories',
    async ()=>{
        const {data} = await services.getCategories();
        return data
    }
);

const getTeachers = createAsyncThunk(
    "teachers",
    async ({element})=>{
        const {data}= await services.getTeachers(element);
        return data
    }

);

const postAVG = createAsyncThunk(
    "avg",
    async ({element})=>{
        const {data} = await services.postAVG(element);
        return data;
    }
);

const slice = createSlice({
    name:'main',
    initialState,
    reducers:{},
    extraReducers:(builder )=>{
        builder
            .addCase(getCategories.fulfilled,(state, action) => {
                state.categories = action.payload;

            })
            .addCase(getTeachers.fulfilled,(state, action) => {
                state.teachers = action.payload;
            })
            .addCase(postAVG.fulfilled,(state, action) => {
                state.avg.push(action.payload);
            })
    }
});

const {reducer:categoriesReducer} = slice;

const actions = {
    getCategories,
    getTeachers,
    postAVG
}
export {categoriesReducer,actions}