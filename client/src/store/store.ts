import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './apis/productQueries';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer, // Add the API reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware), // Add the API middleware
});