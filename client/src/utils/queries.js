// imports
import { gql } from '@apollo/client';

// gql query for the logged in user 'me'
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;