import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Args {
    offset: number;
    limit: number
}

export const productApi = createApi({
    reducerPath: 'product', // Unique key for the reducer
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Base URL for all requests
    endpoints: (builder) => ({
        // Define endpoints here
        getProducts: builder.query<any, Args>({
            query: ({ limit, offset }) => `/products?offset=${offset}&limit=${limit}`,
        }),

    }),
});

export const { useGetProductsQuery } = productApi;