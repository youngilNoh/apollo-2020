import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: Number(id)
    }
  });

  if (loading) {
    return "loading"
  }

  if (data && data.movie) {
    return data.movie.title
  }
  return (
    <div>Detail</div>
  );
}

export default Detail
