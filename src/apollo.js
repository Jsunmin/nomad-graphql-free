import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
    uri: 'https://yts.mx/api/v2/list_movies.json',
    cache: new InMemoryCache()
});

export default client;