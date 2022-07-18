import {configureStore} from '@reduxjs/toolkit';
import dogs from './slice/index';

export default configureStore({
    reducer: dogs,
});