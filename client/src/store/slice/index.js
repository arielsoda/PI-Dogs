import {createSlice} from '@reduxjs/toolkit';
import reducerDogs from '../../reducer/index';

export const slice = createSlice({
    name: 'dogs',
    initialState: {
        temperaments: [],
        dogs: [],
        auxFilter: [],
        auxiliar: [],
        dog: {},
        pages: [],
        pageToShow: [],
        auxDogs: [],
    },
    reducers: reducerDogs,
    });

export default slice.reducer;

export const { getDogs, showPage, dog, pages, search, getTemp, filter, orderAA, orderDD, light, heavy } = slice.actions;