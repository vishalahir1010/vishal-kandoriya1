import { gql } from "@apollo/client";

export const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

export const UPDATE_SONG = gql`
  mutation UpdateSong($id: ID!, $title: String!) {
    updateSong(id: $id, title: $title) {
      id
      title
      artist
    }
  }
`;

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;