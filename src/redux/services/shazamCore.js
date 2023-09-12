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

    getSongsByGenre: builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),
  
  getSongDetails: builder.query({ query: ({ songid }) => `
  /tracks/details?track_id={songid}`}),

  getSongsBySearch: builder.query({ query: (searchTerm) => `
  /search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
}),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;