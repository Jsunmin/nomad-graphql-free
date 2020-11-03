import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;
export default () => {
    // useQuery is a React hook that use the Hooks API to share GraphQL data with your UI
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(error, data)
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error : {error.message}</p>;
    }
    if (data && data.movies) {
        return data.movies.map(({ id, medium_cover_image }) => (
            <div key={id}>
                <p>
                    {id}
                </p>
            </div>
        ));
    }
};