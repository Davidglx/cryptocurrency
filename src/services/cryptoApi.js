import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const cryptoApiHeaders = {
    'X-RapidAPI-Key': '45ff223df3msh22022ca2bd09dbap12bd7fjsnc025a40cfc26',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endPoints: ( builder ) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//     headers: {
//     'X-RapidAPI-Key': '45ff223df3msh22022ca2bd09dbap12bd7fjsnc025a40cfc26',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// //       
//     }
//   };

