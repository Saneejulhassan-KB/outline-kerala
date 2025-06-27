import { gql } from "@apollo/client";

export const GET_LATEST_NEWS = gql`
 query{
    subcategories{
      id
      name
      slug
      image
      news{
        id
        title
        image
        slug
        content
        publishDate
        tags{
          id
          name
        }
        comments{
          id
          user{
            id
            username
          }
          content
          approved
          createdAt
        }
        likes{
          id
          user{
            id
            username
          }
        }
      }
    }
  }

`;