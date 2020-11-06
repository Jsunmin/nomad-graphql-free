import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/docs/react/get-started/
const client = new ApolloClient({
    // cors 설정 필요함..
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

export default client;