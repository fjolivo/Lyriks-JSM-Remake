import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducer: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
            prepareHeaders: (headers) =>{
                headers.set('X-RapidAPI-Key', '898d6b7133msh58ae5b9706ef504p13fde6jsn2232927e4d2d');

                return headers;
            },
        }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        
    })
})

export const {
    useGetTopChartsQuery,
}= shazamCoreApi
    
