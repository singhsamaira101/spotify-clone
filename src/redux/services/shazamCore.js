import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'f414a9d987msh05ab6bafedd2d70p1df9aajsnff63bc583192',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err)); 

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f414a9d987msh05ab6bafedd2d70p1df9aajsnff63bc583192');
      return headers;
    },
  }),
  endpoints: (builder)=>({
    getTopCharts: builder.query({query:() => '/charts/track'}),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;