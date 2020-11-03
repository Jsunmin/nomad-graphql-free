import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
    // cors 설정 필요함..
    uri: 'https://yts.mx/api/v2/list_movies.json',
    cache: new InMemoryCache()
});

export default client;