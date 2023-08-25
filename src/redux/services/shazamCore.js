import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Shazam Core url: https://rapidapi.com/WaveTech/api/shazam-core7/
// export const shazamCoreApi = createApi({
//   reducerPath: 'shazamCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//     prepareHeaders: (headers) => {
//       headers.set(
//         'X-RapidAPI-Key',
//         '4a94ac7116mshd5cb12855ea3d19p184fd5jsn0a61ceae891b',
//       );

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => '/charts/world' }),
//   }),
// });

// url: https://rapidapi.com/apidojo/api/shazam/
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '4a94ac7116mshd5cb12855ea3d19p184fd5jsn0a61ceae891b',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/track',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
